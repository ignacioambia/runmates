import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ChatEntity } from './entities/chat.entity';
import { Repository } from 'typeorm';
import { ChatAction, ChatMessage } from '@runmates/types/chats';
import { ConfigService } from '@nestjs/config';
import { Mistral } from '@mistralai/mistralai';
import OpenAI from 'openai';

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

  private aiClient = new OpenAI();
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
            goal: {
              type: 'number',
              description: 'What is your distance goal?, e.g. 5k, 10k, half marathon, etc.',
            }
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
  }

  async processMessage(messages: any): Promise<any> {
    // const result = await this.aiClient.agents.complete({
    //   agentId: 'ag:d524bc51:20250313:untitled-agent:ba3114ed',
    //   tools: this.tools,
    //   messages: messages,
    // });
    // const { message } = result.choices[0];
    // if (message.toolCalls?.find((toolCall) => toolCall.function.name === 'get_user_basic_info')) {
    //   console.log('A tool call will be made', result.choices[0]);
    //   return;
    // }
    // // Process the message and return a response
    // return message;
  }

  async createChat(userId: number): Promise<any> {
    const chat = this.chatRepository.create({ userId });
    return this.chatRepository.save({ userId });
  }

  async startSignupConversation(): Promise<ChatMessage> {

    const thread = await this.aiClient.beta.threads.create();

    const message  =  await this.aiClient.beta.threads.messages.create(
      thread.id,
      {
      role: 'user',
      content: "Hi! I'm new user, can you present yourself, be very brief and ask me my name? Im open to you asking me questions.",
      }
    );

    const processSignupMessage = () => new Promise<string>((resolve, reject) => {
    const run = this.aiClient.beta.threads.runs.stream(thread.id, { assistant_id: this.configService.get('OPENAI_ASSISTANT_ID') })
    .on('messageDone', (message) => {
      console.log('Tool call delta: ',);
      resolve( message.content[0]['text'].value);
    });
    });

    return { 
      threadId: thread.id,
      role: 'assistant',
      content: await processSignupMessage(),
    }
  }
}
