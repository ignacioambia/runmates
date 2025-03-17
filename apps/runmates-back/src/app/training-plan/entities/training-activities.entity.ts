import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { DailyTrainingPlan } from "./daily-training-plan.entity";

@Entity()
export class TrainingActivityTemplate {
 @PrimaryGeneratedColumn()
 id: number;

 @ManyToOne(() => DailyTrainingPlan, DailyTrainingPlan => DailyTrainingPlan.id)
 daily_training_plan_template: DailyTrainingPlan;

 @Column()
 title: string;

 @Column()
 duration: number;

 @Column()
 description: string;

}
