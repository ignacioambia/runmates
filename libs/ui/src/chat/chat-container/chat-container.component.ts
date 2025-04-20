import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatService } from '../chat.service';
import { RmChatInput } from "../../inputs/chat-input/chat-input.component";
import { RmMessage } from '@runmates/ui/components';
import { ChatMessage } from '@runmates/types/chats';

export interface ChatUserInfo {
  name: string;
  title: string;
  avatar: string;
}

//TODO: Add an animation when a new message is received
@Component({
  selector: 'rm-chat-container',
  imports: [CommonModule, RmChatInput, RmMessage],
  templateUrl: './chat-container.component.html',
  styleUrl: './chat-container.component.scss',
})
export class RmChatContainer {

  public chatId = input<number>();
  public userInfo = input<ChatUserInfo>();

  public messages: any[] = [];
  constructor(private chatService: ChatService) {
    //TODO: THIS MUST BE MOVED outSIDE THE CONSTRUCTOR
    this.chatService.onSignup().subscribe((messages) => {
      this.messages = messages;
    });

    this.chatService.receiveMessage().subscribe((message) => {

      this.messages.push(message);
    });
  }

  public sendMessage(message: string) {
    this.messages.push({
      role: 'user',
      content: message,
    });
    this.chatService.sendMessage(this.messages);
  }
}
