import { Injectable } from '@nestjs/common';
import { CreateTrainingPlanTemplateDto } from './dto/create-training-plan-template.dto';
import { UpdateTrainingPlanTemplateDto } from './dto/update-training-plan-template.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TrainingPlanTemplateEntity } from './entities/training-plan-template.entity';
import { Repository } from 'typeorm';
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

  async findNearestDistance(kilometers: number): Promise<number> {
    const result = await this.trainingPlanTemplateRepository
      .createQueryBuilder('template')
      .select(['template.training_distance'])
      .addSelect('ABS(template.training_distance - :kilometers)', 'distance_difference')
      .setParameter('kilometers', kilometers)
      .orderBy('distance_difference', 'ASC')
      .getOne();

    return result.training_distance;
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
