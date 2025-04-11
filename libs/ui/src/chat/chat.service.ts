import { Injectable, InjectionToken, Injector, ViewContainerRef } from '@angular/core';
import { Observable } from 'rxjs';
import { Socket, io } from 'socket.io-client';
export const RM_DIALOG_PARAMS = new InjectionToken<any>('RM_DIALOG_PARAMS');


@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private socket: Socket;

  constructor() {
    this.socket = io('http://localhost:3000');
  }


  sendMessage(message: string) {
    this.socket.emit('message', message);
  }
  
  receiveMessage() {
    return new Observable((observer) => {
      this.socket.on('message', (message) => {
        observer.next(message);
      });
    });
  }



}
