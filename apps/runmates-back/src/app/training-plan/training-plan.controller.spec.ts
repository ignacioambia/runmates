import { Test, TestingModule } from '@nestjs/testing';
import { TrainingPlanController } from './training-plan.controller';
import { TrainingPlanService } from './training-plan.service';

describe('TrainingPlanController', () => {
  let controller: TrainingPlanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TrainingPlanController],
      providers: [TrainingPlanService],
    }).compile();

    controller = module.get<TrainingPlanController>(TrainingPlanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
