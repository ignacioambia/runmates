import { Test, TestingModule } from '@nestjs/testing';
import { ChatsController } from './chats.controller';
import { ChatsService } from './chats.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ChatEntity } from './entities/chat.entity';
import { mockRepository } from '../../test-utils/mock-repository.util';
import { ConfigService } from '@nestjs/config';

describe('ChatsController', () => {
  let controller: ChatsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChatsController],
      providers: [ChatsService, ConfigService,
        {
          provide: getRepositoryToken(ChatEntity),
          useValue: mockRepository,
        }
      ],
    }).compile();

    controller = module.get<ChatsController>(ChatsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
