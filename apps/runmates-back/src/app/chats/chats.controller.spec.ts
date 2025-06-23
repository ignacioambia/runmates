import { Test, TestingModule } from '@nestjs/testing';
import { ChatsController } from './chats.controller';
import { ChatsService } from './chats.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ChatEntity } from './entities/chat.entity';
import { mockRepository } from '../../test-utils/mock-repository.util';
import { ConfigService } from '@nestjs/config';
import { ChatsGateway } from './chats.gateway';
import { TrainingPlanTemplatesService } from '../training-plan-templates/training-plan-templates.service';
import { TrainingPlanService } from '../training-plan/training-plan.service';
import { TrainingPlanTemplateEntity } from '../training-plan-templates/entities/training-plan-template.entity';
import { DailyTrainingPlanTemplateEntity } from '../training-plan-templates/entities/daily-training-plan-template.entity';
import { TrainingActivityTemplateEntity } from '../training-plan-templates/entities/training-activities-template.entity';
import { TrainingPlanEntity } from '../training-plan/entities/training-plan.entity';
import { DailyTrainingPlanEntity } from '../training-plan/entities/daily-training-plan.entity';
import { TrainingActivityEntity } from '../training-plan/entities/training-activities.entity';

// Mock ChatsService to avoid OpenAI API dependency
const mockChatsService = {
  createChat: jest.fn().mockImplementation((userId) => {
    return Promise.resolve({ id: 1, userId });
  }),
  processMessage: jest.fn(),
  startSignupConversation: jest.fn()
};

describe('ChatsController', () => {
  let controller: ChatsController;
  let chatsService: ChatsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChatsController],
      providers: [
        // Replace the real service with our mock
        { provide: ChatsService, useValue: mockChatsService },
        ConfigService,
        { provide: ChatsGateway, useValue: { server: { emit: jest.fn() } } },
        { provide: TrainingPlanTemplatesService, useValue: { findAll: jest.fn(), findOne: jest.fn(), getBestPlan: jest.fn() } },
        { provide: TrainingPlanService, useValue: { create: jest.fn(), findAll: jest.fn() } },
        { provide: getRepositoryToken(ChatEntity), useValue: mockRepository },
        { provide: getRepositoryToken(TrainingPlanTemplateEntity), useValue: mockRepository },
        { provide: getRepositoryToken(DailyTrainingPlanTemplateEntity), useValue: mockRepository },
        { provide: getRepositoryToken(TrainingActivityTemplateEntity), useValue: mockRepository },
        { provide: getRepositoryToken(TrainingPlanEntity), useValue: mockRepository },
        { provide: getRepositoryToken(DailyTrainingPlanEntity), useValue: mockRepository },
        { provide: getRepositoryToken(TrainingActivityEntity), useValue: mockRepository }
      ],
    }).compile();

    controller = module.get<ChatsController>(ChatsController);
    chatsService = module.get<ChatsService>(ChatsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('createChat', () => {
    it('should call chatsService.createChat with userId', async () => {
      const userId = 123;
      // Reset the mock before the test
      mockChatsService.createChat.mockClear();
      // No need to spy since we're using a mock implementation
      mockChatsService.createChat.mockResolvedValueOnce({ id: 1, userId });

      const result = await controller.createChat(userId);
      
      expect(chatsService.createChat).toHaveBeenCalledWith(userId);
      expect(result).toEqual({ id: 1, userId });
    });
  });
});
