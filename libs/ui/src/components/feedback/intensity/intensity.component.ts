import { Component, computed, effect, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RmLightningStrike } from '../../../icons/lightning-strike/lightning-strike.component';
import { TrainingIntensity } from '@runmates/types';

@Component({
  selector: 'rm-intensity',
  imports: [CommonModule, RmLightningStrike],
  templateUrl: './intensity.component.html',
  styleUrl: './intensity.component.scss',
})
export class RmIntensity {
  private lightingingIntensityMap: Record<TrainingIntensity, number> = {
    rest: 0,
    low: 1,
    medium: 2,
    high: 3,
  }
  public intensity = input<TrainingIntensity>();
  public lightingArray = computed(() => {
    const numberOfLightings = this.lightingingIntensityMap[this.intensity() || 'rest'];
    return new Array(numberOfLightings);
  })

}
