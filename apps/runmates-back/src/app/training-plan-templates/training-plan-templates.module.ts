import { Module } from '@nestjs/common';
import { TrainingPlanTemplatesService } from './training-plan-templates.service';
import { TrainingPlanTemplatesController } from './training-plan-templates.controller';

@Module({
  controllers: [TrainingPlanTemplatesController],
  providers: [TrainingPlanTemplatesService],
})
export class TrainingPlanTemplatesModule {}
