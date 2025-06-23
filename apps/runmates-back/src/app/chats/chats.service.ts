import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ChatEntity } from './entities/chat.entity';
import { Repository } from 'typeorm';
import { ChatAction, ChatMessage } from '@runmates/types/chats';
import { ConfigService } from '@nestjs/config';
import OpenAI from 'openai';
import { User } from '@runmates/types/users';
import { TrainingPlanTemplatesService } from '../training-plan-templates/training-plan-templates.service';
import { TrainingPlanService } from '../training-plan/training-plan.service';

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

  constructor(
    @InjectRepository(ChatEntity)
    private readonly chatRepository: Repository<ChatEntity>,
    private configService: ConfigService,
    private trainingPlanTemplatesService: TrainingPlanTemplatesService,
    private trainingPlanService: TrainingPlanService
  ) {
  }

  async processMessage(message: ChatMessage): Promise<ChatMessage> {
    await this.aiClient.beta.threads.messages.create(
      message.threadId,
      {
        role: "user",
        content: message.content,
      }
    );
    return new Promise((resolve, reject) => {
      this.aiClient.beta.threads.runs.stream(message.threadId, { assistant_id: this.configService.get('OPENAI_ASSISTANT_ID') })
        .on('toolCallDone', async (toolCall) => {
          const args = toolCall.type === 'function' && JSON.parse(toolCall.function.arguments);
          const trainingPlan = await this.trainingPlanTemplatesService.getBestPlan(args.goal);
          await this.trainingPlanService.create(trainingPlan);
          resolve({
            threadId: message.threadId,
            role: 'assistant',
            content:'Awesome! Thanks for sharing all that! I will store this information and use it to help you find running partners and create a personalized plan for you.',
          });
        })
        .on('messageDone', (newMessage) => {
          resolve({
            threadId: message.threadId,
            role: 'assistant',
            content: newMessage.content[0]['text'].value,
          });

        });
    });

  }



  async createChat(userId: number): Promise<any> {
    const chat = this.chatRepository.create({ userId });
    return this.chatRepository.save({ userId });
  }

  async startSignupConversation(): Promise<ChatMessage> {

    const thread = await this.aiClient.beta.threads.create();

    const message = await this.aiClient.beta.threads.messages.create(
      thread.id,
      {
        role: 'user',
        content: "Hi! I'm new user, can you present yourself, be very brief and ask me my name? Im open to you asking me questions.",
      }
    );

    const processSignupMessage = () => new Promise<string>((resolve, reject) => {
      const run = this.aiClient.beta.threads.runs.stream(thread.id, { assistant_id: this.configService.get('OPENAI_ASSISTANT_ID') })
        .on('messageDone', (message) => {
          resolve(message.content[0]['text'].value);
        });
    });

    return {
      threadId: thread.id,
      role: 'assistant',
      content: await processSignupMessage(),
    }
  }
}
