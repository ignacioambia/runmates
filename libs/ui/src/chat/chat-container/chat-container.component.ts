import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatService } from '../chat.service';
import { RmChatInput } from "../../inputs/chat-input/chat-input.component";
import { RmMessage } from '@runmates/ui/components';

//TODO: Move to a separate file
export interface ChatMessage {
  type: 'sent' | 'received';
  content: string;
}

//TODO: Add an animation when a new message is received
@Component({
  selector: 'rm-chat-container',
  imports: [CommonModule, RmChatInput, RmMessage],
  templateUrl: './chat-container.component.html',
  styleUrl: './chat-container.component.scss',
})
export class RmChatContainer {

  public messages: ChatMessage[] = [{
    type: 'received',
    content: 'Hello, how can I help you?',
  }];
  constructor(private chatService: ChatService) {
    this.chatService.receiveMessage().subscribe((message) => {
      this.messages.push({
        type: 'received',
        content: message,
      });
    });
  }

  public sendMessage(message: string) {
    this.messages.push({
      type: 'sent',
      content: message,
    });
    this.chatService.sendMessage(message);
  }
}
