import { Controller, Post } from '@nestjs/common';
import { ChatsService } from './chats.service';
import { TokenPayload } from '../common/decorators/token-payload.decorator';

@Controller('chats')
export class ChatsController {
  constructor(private readonly chatsService: ChatsService) {}

  @Post('create')
  createChat(@TokenPayload('id') userId: number) {
    return this.chatsService.createChat(userId);
  }
}