import { IsNumber, IsString } from "class-validator";

export class CreateDailyTrainngPlanTemplateDto {
  @IsNumber()
  training_plan_template_id: number;
  
  @IsString()
  intensity: string;

  @IsString()
  notes: string;
}