import { Test, TestingModule } from '@nestjs/testing';
import { TrainingPlanService } from './training-plan.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { mockRepository } from '../../test-utils/mock-repository.util';
import { TrainingPlan } from './entities/training-plan.entity';

describe('TrainingPlanService', () => {
  let service: TrainingPlanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TrainingPlanService,
        {
          provide: getRepositoryToken(TrainingPlan),
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
