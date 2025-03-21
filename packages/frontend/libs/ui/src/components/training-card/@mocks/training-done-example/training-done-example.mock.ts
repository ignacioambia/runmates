import { Component, input } from "@angular/core";
import { trainingWithOneSession, trainingWithTwoSessions, trainingWithThreeSessions} from '../trainings.mock';
import { RmTrainingCard } from "../../training-card.component";
import { TrainingStatus } from "@runmates/types/training-plans";

@Component({
 selector: 'rm-training-done-example',
 templateUrl: './training-done-example.mock.html',
 styleUrl: './/training-done-example.mock.scss',
 imports: [RmTrainingCard]

})
export class TrainingDoneExample {
 public trainingWithOneSession = trainingWithOneSession;
 public trainingWithTwoSessions = trainingWithTwoSessions;
 public trainingWithThreeSessions = trainingWithThreeSessions;

 public trainingStatus = input<TrainingStatus>();
}