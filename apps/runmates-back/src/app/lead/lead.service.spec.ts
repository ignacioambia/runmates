import { Test, TestingModule } from '@nestjs/testing';
import { LeadService } from './lead.service';
import { Lead } from './entities/lead.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { mockRepository } from '../../test-utils/mock-repository.util';

describe('LeadService', () => {
  let service: LeadService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LeadService, {
        provide: getRepositoryToken(Lead),
        useValue: mockRepository,
      }],
    }).compile();

    service = module.get<LeadService>(LeadService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
