import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ChatEntity } from './entities/chat.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ChatsService {
  constructor(
    @InjectRepository(ChatEntity)
    private readonly chatRepository: Repository<ChatEntity>
  ) {}
  processMessage(message: any): any {
    // Process the message and return a response
    return { ...message, timestamp: new Date() };
  }

  async createChat(userId: number): Promise<any> {
    const chat = this.chatRepository.create({ userId });
    return this.chatRepository.save({userId});
  }
}
