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

@Module({
  imports: [TypeOrmModule.forFeature([ChatEntity, TrainingPlanTemplateEntity, DailyTrainingPlanTemplateEntity, TrainingActivityTemplateEntity])],
  controllers: [ChatsController],
  providers: [ChatsGateway, ChatsService, TrainingPlanTemplatesService],
})
export class ChatsModule {}
