import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '@runmates/types';

@Component({
  selector: 'rm-message',
  imports: [CommonModule],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss',
})
export class RmMessage {
  public user = input<User>();
}
