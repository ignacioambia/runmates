import { Component, computed, effect, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatService } from '../chat.service';
import { RmChatInput } from "../../inputs/chat-input/chat-input.component";
import { RmMessage } from '@runmates/ui/components';
import { IonicModule } from '@ionic/angular';
import { ChatMessage } from '@runmates/types/chats';

export interface ChatUserInfo {
  name: string;
  title: string;
  avatar: string;
}

//TODO: Add an animation when a new message is received
@Component({
  selector: 'rm-chat-container',
  imports: [CommonModule, RmChatInput, RmMessage, IonicModule],
  templateUrl: './chat-container.component.html',
  styleUrl: './chat-container.component.scss',
})
export class RmChatContainer {

  public chatId = input<number>();
  public userInfo = input<ChatUserInfo>();

  public messages = signal<any[]>([]);
  public displayedMessages = computed(() => this.messages().filter((message) => message.role !== 'system'));
  
  constructor(private chatService: ChatService) {
    //TODO: THIS MUST BE MOVED outSIDE THE CONSTRUCTOR
    this.chatService.onSignup().subscribe((messages) => {
      this.messages.update(() => messages);
    });

    this.chatService.receiveMessage().subscribe((message) => {

      this.messages.update((currentMessages) => [...currentMessages, message]);
    });
  }

  public sendMessage(message: string) {
    const newMessage: any = {
        role: 'user',
        content: message,
    };
    this.messages.update((currentMessages) => [...currentMessages, newMessage]);

    this.chatService.sendMessage(this.messages());
  }
}
