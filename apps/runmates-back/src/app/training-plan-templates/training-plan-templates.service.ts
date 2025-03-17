import { Injectable } from '@nestjs/common';
import { CreateTrainingPlanTemplateDto } from './dto/create-training-plan-template.dto';
import { UpdateTrainingPlanTemplateDto } from './dto/update-training-plan-template.dto';

@Injectable()
export class TrainingPlanTemplatesService {
  create(createTrainingPlanTemplateDto: CreateTrainingPlanTemplateDto) {
    return 'This action adds a new trainingPlanTemplate';
  }

  findAll() {
    return `This action returns all trainingPlanTemplates`;
  }

  findOne(id: number) {
    return `This action returns a #${id} trainingPlanTemplate`;
  }

  update(id: number, updateTrainingPlanTemplateDto: UpdateTrainingPlanTemplateDto) {
    return `This action updates a #${id} trainingPlanTemplate`;
  }

  remove(id: number) {
    return `This action removes a #${id} trainingPlanTemplate`;
  }
}
