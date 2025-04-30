import { Test, TestingModule } from '@nestjs/testing';
import { TrainingPlanTemplatesController } from './training-plan-templates.controller';
import { TrainingPlanTemplatesService } from './training-plan-templates.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { TrainingPlanTemplateEntity } from './entities/training-plan-template.entity';
import { mockRepository } from '../../test-utils/mock-repository.util';
import { TrainingActivityTemplateEntity } from './entities/training-activities-template.entity';
import { DailyTrainingPlanTemplateEntity } from './entities/daily-training-plan-template.entity';

describe('TrainingPlanTemplatesController', () => {
  let controller: TrainingPlanTemplatesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TrainingPlanTemplatesController],
      providers: [TrainingPlanTemplatesService,
        {
          provide: getRepositoryToken(TrainingPlanTemplateEntity),
          useValue: mockRepository,
        },
        {
          provide: getRepositoryToken(TrainingActivityTemplateEntity),
          useValue: mockRepository,
        },
        {
          provide: getRepositoryToken(DailyTrainingPlanTemplateEntity),
          useValue: mockRepository,
        },
      ],
    }).compile();

    controller = module.get<TrainingPlanTemplatesController>(TrainingPlanTemplatesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
