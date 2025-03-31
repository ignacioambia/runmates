import { Test, TestingModule } from '@nestjs/testing';
import { TrainingPlanController } from './training-plan.controller';
import { TrainingPlanService } from './training-plan.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { mockRepository } from '../../test-utils/mock-repository.util';
import { TrainingPlan } from './entities/training-plan.entity';

describe('TrainingPlanController', () => {
  let controller: TrainingPlanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TrainingPlanController],
      providers: [TrainingPlanService, 
        {
          provide: getRepositoryToken(TrainingPlan),
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
