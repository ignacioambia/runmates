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
  //TODO: This object must be deleted
  private actionPrompts: Record<ChatAction, string> = {
    signup:
      'A new user just signed up and we need to get their basic info. Welcome the new user and start by requesting their name.',
    explainPlan:
      'A user is asking for an explanation of the plan. Please provide a detailed explanation of the plan.',
  };

  private aiClient: Mistral;
  public con: ContentChunk;

  public tools: Tool[] = [
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

  constructor(
    @InjectRepository(ChatEntity)
    private readonly chatRepository: Repository<ChatEntity>,
    private configService: ConfigService
  ) {
    this.aiClient = new Mistral({
      apiKey: this.configService.get('MISTRAL_API_KEY'),
    });
  }

  async processMessage(messages: any): Promise<any> {
    const result = await this.aiClient.agents.complete({
      agentId: 'ag:d524bc51:20250313:untitled-agent:ba3114ed',
      tools: this.tools,
      messages: messages,
    });
    // Process the message and return a response
    return result.choices[0].message;
  }

  async createChat(userId: number): Promise<any> {
    const chat = this.chatRepository.create({ userId });
    return this.chatRepository.save({ userId });
  }

  async startSignupConversation(): Promise<Messages[]> {
    const messages: Messages[] = [
      {
        role: 'system',
        content:
          'You are a friendly assistant. Collect the 3 basic questions of the user and then call the function get_user_basic_info with the user data. You can ask follow up questions to get more info. Once you collect the information and the tooCall is triggered, send the user a message that you are working on his plan',
      },
      {
        role: 'user',
        content:
          "Hi! I'm new user, can you explain me who yo are? Im open to you asking me questions. Get my basic info. Always show interest/ show feedback about what the user just mentioned. Start by saying Hi, presenting yourself, what you do and asking my name.",
      },
    ];
    const result = await this.aiClient.agents.complete({
      agentId: 'ag:d524bc51:20250313:untitled-agent:ba3114ed',
      tools: this.tools,
      messages: messages,
    });

    messages.push({ role: 'assistant', ...result.choices[0].message });
    return messages;
  }
}
