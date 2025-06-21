import { Component, effect, ElementRef, input, signal, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatService } from '../chat.service';
import { RmChatInput } from "../../inputs/chat-input/chat-input.component";
import { RmMessage } from '@runmates/ui/components';
import { ChatMessage } from '@runmates/types/chats';
import { animate, style, transition, trigger } from '@angular/animations';

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
  animations: [
    trigger('messageAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ opacity: 0, transform: 'translateY(10px)' }))
      ])
    ])
  ]
})
export class RmChatContainer {
  @ViewChild('messagesContainer') private messagesContainer!: ElementRef;

  public chatId = input<number>();
  public userInfo = input<ChatUserInfo>();

  public messages = signal<ChatMessage[]>([]);
  private threadId = '';

  constructor(private chatService: ChatService) {
    effect(() => {
      this.messages();
      setTimeout(() => this.scrollToBottom(), 100);
    })
    this.chatService.onSignup().subscribe((chatMessage) => {
      this.threadId = chatMessage.threadId;
      this.messages.update(() => [chatMessage]);
    });

    this.chatService.receiveMessage().subscribe((message) => {
      this.messages.update((currentMessages) => [...currentMessages, message]);
    });
  }

  // Method to scroll to the bottom of the messages
  private scrollToBottom(): void {
    try {
      if (this.messagesContainer) {
        const element = this.messagesContainer.nativeElement;
        element.scrollTop = element.scrollHeight;
      }
    } catch (err) {
      console.error('Error scrolling to bottom:', err);
    }
  }

  public sendMessage(message: string) {
    const newMessage: ChatMessage = {
      threadId: this.threadId,
      role: 'user',
      content: message,
    };
    this.messages.update((currentMessages) => [...currentMessages, newMessage]);

    this.chatService.sendMessage(newMessage);
  }
}
