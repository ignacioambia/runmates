import { Injectable, InjectionToken, Injector, ViewContainerRef } from '@angular/core';
import { Observable } from 'rxjs';
import { Socket, io } from 'socket.io-client';
import { ChatMessage } from '@runmates/types/chats';

export const RM_DIALOG_PARAMS = new InjectionToken<any>('RM_DIALOG_PARAMS');

//TODO: Add enviornment variables instead of hardcoded values
@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private socket: Socket;

  constructor() {
    this.socket = io('http://localhost:3000/chat');
  }

  registerUser() {
    this.socket.emit('register');
  }


  sendMessage(messages: any[]) {
    const defaultMessage: ChatMessage = { 
      type: 'user',
      content: '',
    }
    this.socket.emit('message', messages);
  }
  
  receiveMessage() {
    return new Observable<any>((observer) => {
      this.socket.on('message', (message) => {
        observer.next(message);
      });
    });
  }

  onSignup() { 
    return new Observable<any>((observer) => {
      this.socket.on('signup', (messages) => {
        observer.next(messages);
      });
    });
  }



}
