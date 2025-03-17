import { IsNumber, IsString } from "class-validator";

export class CreateTrainingPlanTemplateDto {
  @IsString()
  name: string;
  @IsString()
  description: string;
  @IsNumber()
  training_distance: number;
}
