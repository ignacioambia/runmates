import { Injectable } from '@nestjs/common';

@Injectable()
export class ChatService {
  processMessage(message: any): any {
    // Process the message and return a response
    return { ...message, timestamp: new Date() };
  }
}