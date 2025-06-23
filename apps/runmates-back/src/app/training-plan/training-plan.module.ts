import { Module } from '@nestjs/common';
import { TrainingPlanService } from './training-plan.service';
import { TrainingPlanController } from './training-plan.controller';
import { TrainingPlanEntity, } from './entities/training-plan.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DailyTrainingPlanEntity } from './entities/daily-training-plan.entity';
import { TrainingActivityEntity } from './entities/training-activities.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TrainingPlanEntity, DailyTrainingPlanEntity, TrainingActivityEntity])],
  controllers: [TrainingPlanController],
  providers: [TrainingPlanService],
})
export class TrainingPlanModule {}
