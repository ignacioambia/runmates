import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { TrainingPlanTemplateEntity } from "./training-plan-template.entity";
import { TrainingIntensity } from "@runmates/types/training-plans";

@Entity()
export class DailyTrainingPlanTemplateEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => TrainingPlanTemplateEntity, trainingPlanTemplate => trainingPlanTemplate.id)
  training_plan_template: TrainingPlanTemplateEntity;

  @Column()
  sequence_number: number;

  @Column({ type: 'int'})
  intensity: number;

  @Column()
  notes: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;
}