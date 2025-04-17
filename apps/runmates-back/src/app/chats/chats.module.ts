import { Module } from '@nestjs/common';
import { ChatGateway } from './chats.gateway';
import { ChatService } from './chats.service';

@Module({
  providers: [ChatGateway, ChatService],
})
export class ChatModule {}