import { Injectable } from '@nestjs/common';
import { CreateTrainingPlanTemplateDto } from './dto/create-training-plan-template.dto';
import { UpdateTrainingPlanTemplateDto } from './dto/update-training-plan-template.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TrainingPlanTemplate } from './entities/training-plan-template.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TrainingPlanTemplatesService {
  constructor(@InjectRepository(TrainingPlanTemplate) private readonly trainingPlanTemplateRepository: Repository<TrainingPlanTemplate>) {}
  create(createTrainingPlanTemplateDto: CreateTrainingPlanTemplateDto) {
    const plan = this.trainingPlanTemplateRepository.create(createTrainingPlanTemplateDto);
    return this.trainingPlanTemplateRepository.save(plan);
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
