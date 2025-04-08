import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RmSend } from '@runmates/ui/icons';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'rm-chat-input',
  imports: [CommonModule, RmSend, FormsModule],
  templateUrl: './chat-input.component.html',
  styleUrl: './chat-input.component.scss',
})
export class RmChatInput {
  public placeholder = input<string>('Message...');
  public sendMessage = output<string>();
  public message = '';

  public handleSendMessage() {
    this.sendMessage.emit(this.message);
    console.log('Message sent:', this.message);
    this.message = '';
  }
}
