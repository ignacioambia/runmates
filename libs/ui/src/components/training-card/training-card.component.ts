import { Component, computed, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Training, TrainingStatus } from '@runmates/types/training-plans';
import { RmIntensity } from "../feedback/intensity/intensity.component";

@Component({
  selector: 'rm-training-card',
  imports: [CommonModule, RmIntensity],
  templateUrl: './training-card.component.html',
  styleUrl: './training-card.component.scss',
})
export class RmTrainingCard {
  public training = input<Training>();
  public status = input<TrainingStatus>();
  public statusMessage = computed(() => this.status() === 'completed' ? 'Finalizado': 'Saltado');
  public statusIcon = computed(() => this.status() === 'completed' ? '🚀': '😕');
}
