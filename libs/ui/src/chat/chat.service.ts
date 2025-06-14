import { Injectable, InjectionToken, Injector, ViewContainerRef, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Socket, io } from 'socket.io-client';
import { ChatMessage } from '@runmates/types/chats';
import { RM_API_CONFIG } from '../rm.module';

export const RM_DIALOG_PARAMS = new InjectionToken<any>('RM_DIALOG_PARAMS');

//TODO: Add enviornment variables instead of hardcoded values
@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private socket: Socket;
  private apiConfig = inject(RM_API_CONFIG);

  constructor() {
    this.socket = io(`${this.apiConfig.apiUrl}/chat`, {
      withCredentials: true,
      transports: ['websocket'],
    });
  }

  registerUser() {
    this.socket.emit('register');
  }


  sendMessage(messages: any[]) {
    // const defaultMessage: ChatMessage = { 
    //   role: 'user',
    //   content: '',
    // }
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
    return new Observable<ChatMessage>((observer) => {
      this.socket.on('signup', (chatMessage) => {
        observer.next(chatMessage);
      });
    });
  }



}
