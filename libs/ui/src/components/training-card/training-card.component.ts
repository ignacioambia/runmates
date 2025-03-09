import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Training } from '@runmates/types';

@Component({
  selector: 'rm-training-card',
  imports: [CommonModule],
  templateUrl: './training-card.component.html',
  styleUrl: './training-card.component.scss',
})
export class RmTrainingCard {
  public training = input<Training>();
}
