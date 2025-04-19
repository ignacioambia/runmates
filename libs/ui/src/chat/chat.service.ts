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


  sendMessage(message: Partial<ChatMessage>) {
    const defaultMessage: ChatMessage = { 
      type: 'user',
      content: '',
    }
    this.socket.emit('message', message);
  }
  
  receiveMessage() {
    return new Observable<any>((observer) => {
      this.socket.on('message', (message) => {
        observer.next(message);
      });
    });
  }



}
