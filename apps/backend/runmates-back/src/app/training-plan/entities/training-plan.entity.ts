import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TrainingPlan {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  training_distance: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;
}
