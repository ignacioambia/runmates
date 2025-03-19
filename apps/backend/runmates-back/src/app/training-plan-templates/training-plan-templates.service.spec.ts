import { Test, TestingModule } from '@nestjs/testing';
import { TrainingPlanTemplatesService } from './training-plan-templates.service';

describe('TrainingPlanTemplatesService', () => {
  let service: TrainingPlanTemplatesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TrainingPlanTemplatesService],
    }).compile();

    service = module.get<TrainingPlanTemplatesService>(TrainingPlanTemplatesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
