import { Injectable } from '@nestjs/common';
import { CreateTrainingPlanDto } from './dto/create-training-plan.dto';
import { UpdateTrainingPlanDto } from './dto/update-training-plan.dto';
import { TrainingPlanEntity } from './entities/training-plan.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DailyTrainingPlanEntity } from './entities/daily-training-plan.entity';
import { TrainingActivityEntity } from './entities/training-activities.entity';
@Injectable()
export class TrainingPlanService {

  constructor(
    @InjectRepository(TrainingPlanEntity)
    private readonly trainingPlanRepository: Repository<TrainingPlanEntity>,
    @InjectRepository(DailyTrainingPlanEntity)
    private readonly dailyTrainingPlanRepository: Repository<DailyTrainingPlanEntity>,
    @InjectRepository(TrainingActivityEntity)
    private readonly trainingActivityRepository: Repository<TrainingActivityEntity>,
  ) {

  }
  async create(createTrainingPlanDto: CreateTrainingPlanDto) {
    const queryRunner = this.trainingPlanRepository.manager.connection.createQueryRunner();
    await queryRunner.startTransaction();

    try {
      // Step 1: Save the training plan
      const plan = this.trainingPlanRepository.create(createTrainingPlanDto);
      const savedPlan = await queryRunner.manager.save(plan);

      // Step 2: Prepare daily plans for batch insert
      const dailyPlans = createTrainingPlanDto.plan.map((dailyTrainingPlan, i) => {
        return this.dailyTrainingPlanRepository.create({
          training_plan: savedPlan,
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
        const dailyTrainingPlan = createTrainingPlanDto.plan[i];
        dailyTrainingPlan.activities.forEach((activity) => {
          activities.push(
            this.trainingActivityRepository.create({
              daily_training_plan: savedDailyPlan,
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

  findAll() {
    return this.trainingPlanRepository.find();
  }

  findOne(id: string) {
    return 'This action returns a #${id} trainingPlan';
  }

  update(id: number, updateTrainingPlanDto: UpdateTrainingPlanDto) {
    return `This action updates a #${id} trainingPlan`;
  }

  remove(id: number) {
    return `This action removes a #${id} trainingPlan`;
  }
}
