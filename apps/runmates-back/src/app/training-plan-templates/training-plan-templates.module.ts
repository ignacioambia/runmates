import { Module } from '@nestjs/common';
import { TrainingPlanTemplatesService } from './training-plan-templates.service';
import { TrainingPlanTemplatesController } from './training-plan-templates.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TrainingPlanTemplate } from './entities/training-plan-template.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TrainingPlanTemplate])],
  controllers: [TrainingPlanTemplatesController],
  providers: [TrainingPlanTemplatesService],
})
export class TrainingPlanTemplatesModule {}
