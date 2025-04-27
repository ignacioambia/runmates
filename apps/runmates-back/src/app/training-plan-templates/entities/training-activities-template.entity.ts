import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { DailyTrainingPlanTemplateEntity } from "./daily-training-plan-template.entity";

@Entity()
export class TrainingActivityTemplate {
 @PrimaryGeneratedColumn()
 id: number;

 @ManyToOne(() => DailyTrainingPlanTemplateEntity, dailyTrainingPlanTemplate => dailyTrainingPlanTemplate.id)
 daily_training_plan_template: DailyTrainingPlanTemplateEntity;

 @Column()
 title: string;

 @Column()
 duration: number;

 @Column()
 description: string;

}
