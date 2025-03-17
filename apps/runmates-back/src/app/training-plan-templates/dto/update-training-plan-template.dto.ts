import { PartialType } from '@nestjs/mapped-types';
import { CreateTrainingPlanTemplateDto } from './create-training-plan-template.dto';

export class UpdateTrainingPlanTemplateDto extends PartialType(CreateTrainingPlanTemplateDto) {}
