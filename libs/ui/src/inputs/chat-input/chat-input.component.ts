import { Component, ElementRef, input, output, ViewChild } from '@angular/core';
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

  @ViewChild('chatInput') public chatInput!: ElementRef<HTMLTextAreaElement>;
  public placeholder = input<string>('Message...');
  public messageSent = output<string>();
  public message = '';

  public handleSendMessage() {
    if (this.message.trim()) {
      this.messageSent.emit(this.message.trim());
      this.message = '';
    }
    this.adjustHeight(); // Adjust height after sending message
  }

  public adjustHeight(): void {
    const chatInput = this.chatInput.nativeElement;
    chatInput.style.height = '20px'; // Reset height to auto to handle text removal
    chatInput.style.height = `${chatInput.scrollHeight}px`;
  }
}
