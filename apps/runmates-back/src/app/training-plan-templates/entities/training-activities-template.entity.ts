import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { DailyTrainingPlanTemplateEntity } from "./daily-training-plan-template.entity";

@Entity()
export class TrainingActivityTemplateEntity {
 @PrimaryGeneratedColumn()
 id: number;

 @ManyToOne(() => DailyTrainingPlanTemplateEntity, dailyTrainingPlanTemplate => dailyTrainingPlanTemplate.id)
 daily_training_plan_template: DailyTrainingPlanTemplateEntity;

 @Column()
 activity: string;

 @Column({ type: 'int', nullable: true })
 distance: number;

 @Column({ nullable: true })
 description: string;

}
