import { Module } from '@nestjs/common';
import { TrainingPlanService } from './training-plan.service';
import { TrainingPlanController } from './training-plan.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TrainingPlan, TrainingPLanSchema } from './entities/training-plan.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: TrainingPlan.name, schema: TrainingPLanSchema}])],
  controllers: [TrainingPlanController],
  providers: [TrainingPlanService],
})
export class TrainingPlanModule {}
