import { Injectable } from '@nestjs/common';
import { CreateTrainingPlanTemplateDto } from './dto/create-training-plan-template.dto';
import { UpdateTrainingPlanTemplateDto } from './dto/update-training-plan-template.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TrainingPlanTemplateEntity } from './entities/training-plan-template.entity';
import { In, Repository } from 'typeorm';
import { DailyTrainingPlanTemplateEntity } from './entities/daily-training-plan-template.entity';
import { TrainingActivityTemplateEntity } from './entities/training-activities-template.entity';

@Injectable()
export class TrainingPlanTemplatesService {
  constructor(
    @InjectRepository(TrainingPlanTemplateEntity)
    private readonly trainingPlanTemplateRepository: Repository<TrainingPlanTemplateEntity>,
    @InjectRepository(DailyTrainingPlanTemplateEntity)
    private readonly dailyTrainingPlanTemplateRepository: Repository<DailyTrainingPlanTemplateEntity>,
    @InjectRepository(TrainingActivityTemplateEntity)
    private readonly trainingActivityTemplateRepository: Repository<TrainingActivityTemplateEntity>,
  ) {}

  async create(createTrainingPlanTemplateDto: CreateTrainingPlanTemplateDto) {
    const queryRunner = this.trainingPlanTemplateRepository.manager.connection.createQueryRunner();
    await queryRunner.startTransaction();

    try {
      // Step 1: Save the training plan template
      const plan = this.trainingPlanTemplateRepository.create(createTrainingPlanTemplateDto);
      const savedPlan = await queryRunner.manager.save(plan);

      // Step 2: Prepare daily plans for batch insert
      const dailyPlans = createTrainingPlanTemplateDto.plan.map((dailyTrainingPlan, i) => {
        return this.dailyTrainingPlanTemplateRepository.create({
          training_plan_template: savedPlan,
          sequence_number: i,
          intensity: dailyTrainingPlan.intensity,
          notes: dailyTrainingPlan.notes,
        });
      });

      // Save all daily plans in a single database call
      const savedDailyPlans = await queryRunner.manager.save(dailyPlans);

      // Step 3: Prepare activities for batch insert
      const activities = [];
      savedDailyPlans.forEach((savedDailyPlan, i) => {
        const dailyTrainingPlan = createTrainingPlanTemplateDto.plan[i];
        dailyTrainingPlan.activities.forEach((activity) => {
          activities.push(
            this.trainingActivityTemplateRepository.create({
              daily_training_plan_template: savedDailyPlan,
              activity: activity.activity,
              distance: activity.distance,
              description: activity.description,
            }),
          );
        });
      });

      // Save all activities in a single database call
      await queryRunner.manager.save(activities);

      // Commit the transaction
      await queryRunner.commitTransaction();

      return savedPlan; // Return the created plan for further use
    } catch (error) {
      // Rollback the transaction in case of an error
      await queryRunner.rollbackTransaction();
      throw new Error(`Failed to create training plan: ${error.message}`);
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }

  async getBestPlan(kilometers: number): Promise<CreateTrainingPlanTemplateDto> {
    const result = await this.trainingPlanTemplateRepository
      .createQueryBuilder('template')
      .addSelect('ABS(template.training_distance - :kilometers)', 'distance_difference')
      .setParameter('kilometers', Math.round(kilometers))
      .orderBy('distance_difference', 'ASC')
      .getOne();

    if (!result) {
      throw new Error(`No training plan found matching the distance: ${kilometers}km`);
    }

    return this.getFullTrainingPlan(result.id);
  }
  
  async getFullTrainingPlan(planId: number) {
    // Step 1: Get the training plan template
    const trainingPlan = await this.trainingPlanTemplateRepository.findOne({
      where: { id: planId }
    });
    
    if (!trainingPlan) {
      throw new Error(`Training plan with ID ${planId} not found`);
    }
    
    // Step 2: Get all daily plans for this template
    const dailyPlans = await this.dailyTrainingPlanTemplateRepository.find({
      where: { training_plan_template: { id: planId } },
      order: { sequence_number: 'ASC' },
      relations: ['training_plan_template']
    });
    
    // Step 3: Get all activities grouped by daily plan
    const dailyPlanIds = dailyPlans.map(plan => plan.id);
    const allActivities = await this.trainingActivityTemplateRepository.find({
      where: { daily_training_plan_template: { id: In(dailyPlanIds) } },
      relations: ['daily_training_plan_template']
    });
    
    // Step 4: Format data to match CreateTrainingPlanTemplateDto structure
    const formattedDailyPlans = dailyPlans.map(dailyPlan => {
      // Find all activities for this daily plan
      const planActivities = allActivities.filter(
        activity => activity.daily_training_plan_template.id === dailyPlan.id
      );
      
      // Format as DailyTrainingPlanTemplateDto
      return {
        intensity: dailyPlan.intensity,
        notes: dailyPlan.notes,
        activities: planActivities.map(activity => ({
          activity: activity.activity,
          distance: activity.distance,
          description: activity.description
        }))
      };
    });
    
    // Return in the format of CreateTrainingPlanTemplateDto
    return {
      name: trainingPlan.name,
      description: trainingPlan.description,
      training_distance: trainingPlan.training_distance,
      plan: formattedDailyPlans
    };
  }

  findAll() {
    return `This action returns all trainingPlanTemplates`;
  }

  findOne(id: number) {
    return `This action returns a #${id} trainingPlanTemplate`;
  }

  update(
    id: number,
    updateTrainingPlanTemplateDto: UpdateTrainingPlanTemplateDto
  ) {
    return `This action updates a #${id} trainingPlanTemplate`;
  }

  remove(id: number) {
    return `This action removes a #${id} trainingPlanTemplate`;
  }
}
