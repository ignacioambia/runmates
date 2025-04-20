import { Test, TestingModule } from '@nestjs/testing';
import { ChatsService } from './chats.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ChatEntity } from './entities/chat.entity';
import { mockRepository } from '../../test-utils/mock-repository.util';
import { ConfigService } from '@nestjs/config';

describe('ChatsService', () => {
  let service: ChatsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChatsService, ConfigService,
        {
          provide: getRepositoryToken(ChatEntity),
          useValue: mockRepository,
        }
      ],
    }).compile();

    service = module.get<ChatsService>(ChatsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
