import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { TrainingPlanEntity } from "./training-plan.entity";

@Entity()
export class DailyTrainingPlanEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => TrainingPlanEntity, TrainingPlan => TrainingPlan.id)
  training_plan: TrainingPlanEntity;

  @Column()
  sequence_number: number;

  @Column({ type: 'int'})
  intensity: number;

  @Column()
  notes: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;
}