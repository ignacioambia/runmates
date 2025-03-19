import { Test, TestingModule } from '@nestjs/testing';
import { LeadController } from './lead.controller';
import { LeadService } from './lead.service';

describe('LeadController', () => {
  let controller: LeadController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LeadController],
      providers: [LeadService],
    }).compile();

    controller = module.get<LeadController>(LeadController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
