import { Test, TestingModule } from '@nestjs/testing';
import { TrainingPlanService } from './training-plan.service';

describe('TrainingPlanService', () => {
  let service: TrainingPlanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TrainingPlanService],
    }).compile();

    service = module.get<TrainingPlanService>(TrainingPlanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
