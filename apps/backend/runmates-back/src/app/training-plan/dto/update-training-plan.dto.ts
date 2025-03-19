import { PartialType } from '@nestjs/mapped-types';
import { CreateTrainingPlanDto } from './create-training-plan.dto';

export class UpdateTrainingPlanDto extends PartialType(CreateTrainingPlanDto) {}
