import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Socket } from 'socket.io';
import { ChatMessage } from '@runmates/types/chats'
import { ChatsService } from './chats.service';

@WebSocketGateway({ namespace: '/chat', cors: true }) // Enable CORS for cross-origin requests
export class ChatsGateway implements OnGatewayConnection, OnGatewayDisconnect {

  constructor(private readonly chatService: ChatsService) {}
  
  // Triggered when a client connects
  handleConnection(@ConnectedSocket() client: Socket) {
    console.log(`Client connected: ${client.id}`);
  }

  // Triggered when a client disconnects
  handleDisconnect(@ConnectedSocket() client: Socket) {
    console.log(`Client disconnected: ${client.id}`);
  }

  // Handles incoming messages from clients
  @SubscribeMessage('message')
  async handleMessage(
    @MessageBody() message: ChatMessage,
    @ConnectedSocket() client: Socket,
  ) {
    console.log('Received message type is: ', message.action)
    if(message.action) {
      const receivedMessage = await this.chatService.startConversation(message.action);
      console.log('Received message is: ', receivedMessage);
      return { event: 'message', data: receivedMessage }; // Respond to the sender
    }
    return { event: 'message', data: 'Received msg is: ' + message.content }; // Respond to the sender
  }
}