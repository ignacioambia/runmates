import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatService } from '../chat.service';

@Component({
  selector: 'rm-chat-container',
  imports: [CommonModule],
  templateUrl: './chat-container.component.html',
  styleUrl: './chat-container.component.scss',
})
export class RmChatContainer {
  constructor(private chatService: ChatService) {
    this.chatService.receiveMessage().subscribe((message) => {
      console.log('Server returned:', message);
    });
  }

  public sendMessage(message: string) {
    this.chatService.sendMessage(message);
  }
}
