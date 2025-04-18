import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Socket } from 'socket.io';

@WebSocketGateway({ namespace: '/chat', cors: true }) // Enable CORS for cross-origin requests
export class ChatsGateway implements OnGatewayConnection, OnGatewayDisconnect {
  
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
  handleMessage(
    @MessageBody() message: { sender: string; content: string },
    @ConnectedSocket() client: Socket,
  ) {
    return { event: 'message', data: 'Received msg is: ' + message}; // Respond to the sender
  }
}