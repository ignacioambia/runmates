import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { TrainingPlanTemplate } from "./training-plan-template.entity";
import { TrainingIntensity } from "@runmates/types";

@Entity()
export class DailyTrainingPlanTemplate {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => TrainingPlanTemplate, trainingPlanTemplate => trainingPlanTemplate.id)
  training_plan_template: TrainingPlanTemplate;

  @Column()
  sequence_number: number;

  @Column({ type: 'enum', enum: ['low', 'medium', 'high', 'rest'] })
  intensity: TrainingIntensity;

  @Column()
  notes: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;
}