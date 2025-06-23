import { Test, TestingModule } from '@nestjs/testing';
import { TrainingPlanService } from './training-plan.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { mockRepository } from '../../test-utils/mock-repository.util';
import { TrainingPlanEntity } from './entities/training-plan.entity';
import { DailyTrainingPlanEntity } from './entities/daily-training-plan.entity';
import { TrainingActivityEntity } from './entities/training-activities.entity';

describe('TrainingPlanService', () => {
  let service: TrainingPlanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TrainingPlanService,
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

    service = module.get<TrainingPlanService>(TrainingPlanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
