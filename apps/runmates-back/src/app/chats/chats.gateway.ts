import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketServer,
} from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';
import { ChatMessage } from '@runmates/types/chats'
import { ChatsService } from './chats.service';
import { Inject, forwardRef } from '@nestjs/common';

@WebSocketGateway({ namespace: '/chat', cors: true }) // Enable CORS for cross-origin requests
export class ChatsGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  constructor(
    @Inject(forwardRef(() => ChatsService))
    private readonly chatService: ChatsService
  ) {}
  
  // Triggered when a client connects
  handleConnection(@ConnectedSocket() client: Socket) {
    console.log(`Client connected: ${client.id}`);
  }

  // Triggered when a client disconnects
  handleDisconnect(@ConnectedSocket() client: Socket) {
    console.log(`Client disconnected: ${client.id}`);
  }

  @SubscribeMessage('register')
  async registerUser() {
    const receivedMessage = await this.chatService.startSignupConversation();
    return { event: 'signup', data: receivedMessage }; 
  }

  // Handles incoming messages from clients
  @SubscribeMessage('message')
  async handleMessage(
    //TODO: Add message types, where we can also hide the message that were just used for prompt
    @MessageBody() message: ChatMessage,
  ) {
    const resultMessage = await this.chatService.processMessage(message);
    return resultMessage && { event: 'message', data: resultMessage }; // Respond to the sender
  }

  // Method to emit training plan created event to all connected clients
  trainingPlanCreated(trainingPlan?: any) {
    this.server.emit('trainingPlanCreated');
  }
}