import { Test, TestingModule } from '@nestjs/testing';
import { TrainingPlanTemplatesController } from './training-plan-templates.controller';
import { TrainingPlanTemplatesService } from './training-plan-templates.service';

describe('TrainingPlanTemplatesController', () => {
  let controller: TrainingPlanTemplatesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TrainingPlanTemplatesController],
      providers: [TrainingPlanTemplatesService],
    }).compile();

    controller = module.get<TrainingPlanTemplatesController>(TrainingPlanTemplatesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
