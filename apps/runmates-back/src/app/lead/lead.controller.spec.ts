import { Test, TestingModule } from '@nestjs/testing';
import { LeadController } from './lead.controller';
import { LeadService } from './lead.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { mockRepository } from '../../test-utils/mock-repository.util';
import { Lead } from './entities/lead.entity';

describe('LeadController', () => {
  let controller: LeadController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LeadController],
      providers: [LeadService,{
        provide: getRepositoryToken(Lead),
        useValue: mockRepository,
      }],
    }).compile();

    controller = module.get<LeadController>(LeadController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
