import { Module } from '@nestjs/common';
import { TrainingPlanTemplatesService } from './training-plan-templates.service';
import { TrainingPlanTemplatesController } from './training-plan-templates.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TrainingPlanTemplateEntity } from './entities/training-plan-template.entity';
import { DailyTrainingPlanTemplateEntity } from './entities/daily-training-plan-template.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TrainingPlanTemplateEntity,DailyTrainingPlanTemplateEntity])],
  controllers: [TrainingPlanTemplatesController],
  providers: [TrainingPlanTemplatesService],
})
export class TrainingPlanTemplatesModule {}
