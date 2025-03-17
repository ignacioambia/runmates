import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TrainingPlanTemplatesService } from './training-plan-templates.service';
import { CreateTrainingPlanTemplateDto } from './dto/create-training-plan-template.dto';
import { UpdateTrainingPlanTemplateDto } from './dto/update-training-plan-template.dto';

@Controller('training-plan-templates')
export class TrainingPlanTemplatesController {
  constructor(private readonly trainingPlanTemplatesService: TrainingPlanTemplatesService) {}

  @Post()
  create(@Body() createTrainingPlanTemplateDto: CreateTrainingPlanTemplateDto) {
    return this.trainingPlanTemplatesService.create(createTrainingPlanTemplateDto);
  }

  @Get()
  findAll() {
    return this.trainingPlanTemplatesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.trainingPlanTemplatesService.findOne(+id);
  }

  @Patch(':id/add-daily-training-plans')
  update(@Param('id') id: string, @Body() updateTrainingPlanTemplateDto: UpdateTrainingPlanTemplateDto) {
    return this.trainingPlanTemplatesService.update(+id, updateTrainingPlanTemplateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.trainingPlanTemplatesService.remove(+id);
  }
}
