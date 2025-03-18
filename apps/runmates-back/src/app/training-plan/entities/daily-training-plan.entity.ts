import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { TrainingPlan } from "./training-plan.entity";
import { TrainingIntensity } from "@runmates/types/training-plans";

@Entity()
export class DailyTrainingPlan {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => TrainingPlan, TrainingPlan => TrainingPlan.id)
  training_plan_template: TrainingPlan;

  @Column()
  sequence_number: number;

  @Column({ type: 'enum', enum: ['low', 'medium', 'high', 'rest'] })
  intensity: TrainingIntensity;

  @Column()
  notes: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;
}