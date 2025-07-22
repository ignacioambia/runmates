import { Module } from '@nestjs/common';
import { ChatsService } from './chats.service';
import { ChatsController } from './chats.controller';
import { ChatsGateway } from './chats.gateway';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatEntity } from './entities/chat.entity';
import { TrainingPlanTemplatesService } from '../training-plan-templates/training-plan-templates.service';
import { TrainingPlanTemplateEntity } from '../training-plan-templates/entities/training-plan-template.entity';
import { DailyTrainingPlanTemplateEntity } from '../training-plan-templates/entities/daily-training-plan-template.entity';
import { TrainingActivityTemplateEntity } from '../training-plan-templates/entities/training-activities-template.entity';
import { TrainingPlanService } from '../training-plan/training-plan.service';
import { TrainingPlanEntity } from '../training-plan/entities/training-plan.entity';
import { TrainingActivityEntity } from '../training-plan/entities/training-activities.entity';
import { DailyTrainingPlanEntity } from '../training-plan/entities/daily-training-plan.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ChatEntity, TrainingPlanTemplateEntity, DailyTrainingPlanTemplateEntity, TrainingActivityTemplateEntity, TrainingPlanEntity, DailyTrainingPlanEntity, TrainingActivityEntity])],
  controllers: [ChatsController],
  providers: [ChatsGateway, ChatsService, TrainingPlanTemplatesService, TrainingPlanService],
  exports: [ChatsService], // Export ChatsService so it can be used in other modules
})
export class ChatsModule { }
