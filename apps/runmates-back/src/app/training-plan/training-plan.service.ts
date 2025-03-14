import { Injectable } from '@nestjs/common';
import { CreateTrainingPlanDto } from './dto/create-training-plan.dto';
import { UpdateTrainingPlanDto } from './dto/update-training-plan.dto';
import { InjectModel } from '@nestjs/mongoose';
import { TrainingPlan } from './entities/training-plan.entity';
import { Model } from 'mongoose';

@Injectable()
export class TrainingPlanService {

  constructor(@InjectModel(TrainingPlan.name) private readonly trainingPlanModel: Model<TrainingPlan>) {

  }
  create(createTrainingPlanDto: CreateTrainingPlanDto) {
    return 'This action adds a new trainingPlan';
  }

  findAll() {
    return this.trainingPlanModel.find();
  }

  findOne(id: string) {
    return this.trainingPlanModel.findOne({ _id: id });
  }

  update(id: number, updateTrainingPlanDto: UpdateTrainingPlanDto) {
    return `This action updates a #${id} trainingPlan`;
  }

  remove(id: number) {
    return `This action removes a #${id} trainingPlan`;
  }
}
