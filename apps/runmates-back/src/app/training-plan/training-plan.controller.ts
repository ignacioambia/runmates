import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TrainingPlanService } from './training-plan.service';
import { CreateTrainingPlanDto } from './dto/create-training-plan.dto';
import { UpdateTrainingPlanDto } from './dto/update-training-plan.dto';

@Controller('training-plan')
export class TrainingPlanController {
  constructor(private readonly trainingPlanService: TrainingPlanService) {}

  @Post()
  create(@Body() createTrainingPlanDto: CreateTrainingPlanDto) {
    return this.trainingPlanService.create(createTrainingPlanDto);
  }

  @Get()
  findAll() {
    return this.trainingPlanService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.trainingPlanService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTrainingPlanDto: UpdateTrainingPlanDto) {
    return this.trainingPlanService.update(+id, updateTrainingPlanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.trainingPlanService.remove(+id);
  }
}
