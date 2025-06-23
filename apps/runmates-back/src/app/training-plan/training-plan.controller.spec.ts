import { Test, TestingModule } from '@nestjs/testing';
import { TrainingPlanController } from './training-plan.controller';
import { TrainingPlanService } from './training-plan.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { mockRepository } from '../../test-utils/mock-repository.util';
import { TrainingPlanEntity } from './entities/training-plan.entity';
import { DailyTrainingPlanEntity } from './entities/daily-training-plan.entity';
import { TrainingActivityEntity } from './entities/training-activities.entity';

describe('TrainingPlanController', () => {
  let controller: TrainingPlanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TrainingPlanController],
      providers: [
        {
          provide: TrainingPlanService,
          useValue: {
            create: jest.fn(),
            findAll: jest.fn(),
            findOne: jest.fn(),
            update: jest.fn(),
            remove: jest.fn(),
          }
        },
        {
          provide: getRepositoryToken(TrainingPlanEntity),
          useValue: mockRepository,
        },
        {
          provide: getRepositoryToken(DailyTrainingPlanEntity),
          useValue: mockRepository,
        },
        {
          provide: getRepositoryToken(TrainingActivityEntity),
          useValue: mockRepository,
        }
      ],
    }).compile();

    controller = module.get<TrainingPlanController>(TrainingPlanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
