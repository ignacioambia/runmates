import { Injectable } from '@nestjs/common';
import { CreateTrainingPlanDto } from './dto/create-training-plan.dto';
import { UpdateTrainingPlanDto } from './dto/update-training-plan.dto';
import { TrainingPlan } from './entities/training-plan.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
@Injectable()
export class TrainingPlanService {

  constructor(@InjectRepository(TrainingPlan) private readonly trainingPlanModel: Repository<TrainingPlan>) {

  }
  create(createTrainingPlanDto: CreateTrainingPlanDto) {
    return 'This action adds a new trainingPlan';
  }

  findAll() {
    return this.trainingPlanModel.find();
  }

  findOne(id: string) {
    return 'This action returns a #${id} trainingPlan';
  }

  update(id: number, updateTrainingPlanDto: UpdateTrainingPlanDto) {
    return `This action updates a #${id} trainingPlan`;
  }

  remove(id: number) {
    return `This action removes a #${id} trainingPlan`;
  }
}
