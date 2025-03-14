import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { RmTrainingCard, RmMessage } from '@runmates/ui';
import { Training } from '@runmates/types';
import { IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RmTrainingCard, RmMessage, IonContent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class AppHome {

  public trainingPlans: Training[] = [];
  constructor(private http: HttpClient) {
    this.getTraining().subscribe({
      next: (result: any) => {
        this.trainingPlans = Object.values(result.week_3);
      },
    });
  }

  private getTraining() {
    return this.http.get('/training-plan/67cd40b8162f89087fdc7bc8');
  }

  public goToTraining(training: Training) {
    console.log('calling goToTraining', training);
  }
}
