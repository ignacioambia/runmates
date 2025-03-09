import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Training } from '@runmates/types';
import { RmIntensity } from "../feedback/intensity/intensity.component";

@Component({
  selector: 'rm-training-card',
  imports: [CommonModule, RmIntensity],
  templateUrl: './training-card.component.html',
  styleUrl: './training-card.component.scss',
})
export class RmTrainingCard {
  public training = input<Training>();
}
