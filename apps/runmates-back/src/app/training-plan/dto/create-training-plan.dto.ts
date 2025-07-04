import { IsArray, IsInt, IsNumber, IsOptional, IsString, ValidateNested, Min, Max, ArrayMinSize } from "class-validator";
import { Type } from "class-transformer";

export class TrainingPlanActivitiesTemplateDto {
  @IsString()
  activity: string;
  @IsNumber()
  @IsOptional()
  distance: number;

  @IsString()
  @IsOptional()
  description: string;
}

export class DailyTrainingPlanTemplateDto {
  @IsInt()
  @Min(0)
  @Max(3)
  intensity: number;

  @IsString()
  notes: string;

  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => TrainingPlanActivitiesTemplateDto)  
  activities: TrainingPlanActivitiesTemplateDto[];
}

export class CreateTrainingPlanDto {
  @IsString()
  name: string;
  @IsString()
  description: string;
  @IsNumber()
  training_distance: number;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => DailyTrainingPlanTemplateDto)
  plan: DailyTrainingPlanTemplateDto[];
}
