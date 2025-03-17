import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { DailyTrainingPlanTemplate } from "./daily-training-plan-template.entity";

@Entity()
export class TrainingActivityTemplate {
 @PrimaryGeneratedColumn()
 id: number;

 @ManyToOne(() => DailyTrainingPlanTemplate, dailyTrainingPlanTemplate => dailyTrainingPlanTemplate.id)
 daily_training_plan_template: DailyTrainingPlanTemplate;

 @Column()
 title: string;

 @Column()
 duration: number;

 @Column()
 description: string;

}
