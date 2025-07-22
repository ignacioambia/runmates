import { Test, TestingModule } from '@nestjs/testing';
import { MarketplaceService } from './marketplace.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { TicketEntity } from './entities/tickets.entity';

describe('MarketplaceService', () => {
  let service: MarketplaceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MarketplaceService,
        {
          provide: getRepositoryToken(TicketEntity),
          useValue: {
            find: jest.fn(),
            findOne: jest.fn(),
            create: jest.fn(),
            save: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<MarketplaceService>(MarketplaceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
