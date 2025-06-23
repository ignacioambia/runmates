import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { DailyTrainingPlanEntity } from "./daily-training-plan.entity";

@Entity()
export class TrainingActivityEntity {
 @PrimaryGeneratedColumn()
 id: number;

 @ManyToOne(() => DailyTrainingPlanEntity, DailyTrainingPlan => DailyTrainingPlan.id)
 daily_training_plan: DailyTrainingPlanEntity;

 @Column()
 activity: string;

 @Column({ type: 'float', nullable: true })
 distance: number;

 @Column({ nullable: true })
 description: string;

}
