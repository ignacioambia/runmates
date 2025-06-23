import { Test, TestingModule } from '@nestjs/testing';
import { ChatsService } from './chats.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ChatEntity } from './entities/chat.entity';
import { mockRepository } from '../../test-utils/mock-repository.util';
import { ConfigService } from '@nestjs/config';
import { TrainingPlanTemplatesService } from '../training-plan-templates/training-plan-templates.service';
import { TrainingPlanService } from '../training-plan/training-plan.service';

describe('ChatsService', () => {
  let service: ChatsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ChatsService, 
        ConfigService,
        {
          provide: getRepositoryToken(ChatEntity),
          useValue: mockRepository,
        },
        {
          provide: TrainingPlanTemplatesService,
          useValue: {
            findAll: jest.fn(),
            findOne: jest.fn(),
            getBestPlan: jest.fn(),
          },
        },
        {
          provide: TrainingPlanService,
          useValue: {
            create: jest.fn(),
            findAll: jest.fn(),
          },
        }
      ],
    }).overrideProvider(ChatsService).useValue({
      createChat: jest.fn(),
      processMessage: jest.fn(),
      startSignupConversation: jest.fn(),
    }).compile();

    service = module.get<ChatsService>(ChatsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
