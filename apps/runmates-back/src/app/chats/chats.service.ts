import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ChatEntity } from './entities/chat.entity';
import { Repository } from 'typeorm';
import { ChatAction, ChatMessage } from '@runmates/types/chats';
import { ConfigService } from '@nestjs/config';
import { Mistral } from '@mistralai/mistralai';
import {
  ContentChunk,
  Messages,
  Tool,
} from '@mistralai/mistralai/models/components';

@Injectable()
export class ChatsService {
  private actionPrompts: Record<ChatAction, string> = {
    signup:
      'A new user just signed up and we need to get their basic info. Welcome the new user and start by requesting their name.',
    explainPlan:
      'A user is asking for an explanation of the plan. Please provide a detailed explanation of the plan.',
  };

  private aiClient: Mistral;
  public con: ContentChunk;

  constructor(
    @InjectRepository(ChatEntity)
    private readonly chatRepository: Repository<ChatEntity>,
    private configService: ConfigService
  ) {
    this.aiClient = new Mistral({
      apiKey: this.configService.get('MISTRAL_API_KEY'),
    });
    console.log('API key is:', this.configService.get('MISTRAL_API_KEY'));
  }
  processMessage(message: any): any {
    // Process the message and return a response
    return { ...message, timestamp: new Date() };
  }

  async createChat(userId: number): Promise<any> {
    const chat = this.chatRepository.create({ userId });
    return this.chatRepository.save({ userId });
  }

  async startConversation(action: ChatAction): Promise<Messages[]> {
    const tools: Tool[] = [
      {
        type: 'function',
        function: {
          name: 'get_user_basic_info',
          description: 'Get the basic info of a new user',
          parameters: {
            type: 'object',
            properties: {
              name: {
                type: 'string',
                description: 'The name of the user, e.g. John Doe',
              },
              motivation: {
                type: 'string',
                description:
                  'What motivates you to run?, e.g. health, competition, socializing, etc.',
              },
              frequency: {
                type: 'string',
                description: 'How often do you run?, daily, weekly, etc.',
              },
            },
          },
        },
      },
    ];

    const messages: Messages[] = [
      {
        role: 'system',
        content: 'You are a friendly assistant. Always call the get_user_basic_info tool to collect user details. Always start by asking the user name',
      },
      {
        role: 'user',
        content:
          "Hi! I'm new user, can you explain me who yo are? Im open to you asking me questions. Get my basic info. Start by asking my name.",
      },
    ];
    const result = await this.aiClient.agents.complete({
      agentId: 'ag:d524bc51:20250313:untitled-agent:ba3114ed',
      tools: tools,
      messages: messages,
    });

    console.log('Result is: ', result.choices[0].message);

    messages.push({ role: 'assistant', ...result.choices[0].message });
    return messages;
  }
}
