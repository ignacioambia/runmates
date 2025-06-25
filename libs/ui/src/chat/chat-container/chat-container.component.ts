import { Component, effect, ElementRef, input, signal, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ChatService } from '../chat.service';
import { RmChatInput } from "../../inputs/chat-input/chat-input.component";
import { RmButton, RmMessage } from '@runmates/ui/components';
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
  imports: [CommonModule, RmChatInput, RmMessage, RmButton],
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
    ]),
    trigger('planButtonAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.8)' }),
        animate('600ms cubic-bezier(0.175, 0.885, 0.32, 1.275)', 
          style({ opacity: 1, transform: 'scale(1)' }))
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
  public inputDisabled = true;
  public planCreated = false;

  constructor(
    private chatService: ChatService, 
    private router: Router
  ) {
    effect(() => {
      this.messages();
      setTimeout(() => this.scrollToBottom(), 100);
    })
    this.chatService.onSignup().subscribe((chatMessage) => {
      this.threadId = chatMessage.threadId;
      this.messages.update(() => [chatMessage]);
      this.inputDisabled = false;
    });

    this.chatService.receiveMessage().subscribe((message) => {
      this.messages.update((currentMessages) => [...currentMessages, message]);
      this.inputDisabled = false;
    });

    this.chatService.onPlanCreated().subscribe(() => {
      this.planCreated = true;
      this.inputDisabled = false;
      this.scrollToBottom();
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
    this.inputDisabled = true;
  }

  public navigateToHome(): void {
    this.router.navigate(['/home']);
  }
}
