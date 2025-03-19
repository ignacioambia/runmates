import {
  Controller,
  Post,
  Body,
} from '@nestjs/common';
import { LeadService } from './lead.service';
import { CreateLeadDto } from './dto/create-lead.dto';

@Controller('lead')
export class LeadController {
  constructor(private readonly leadService: LeadService) {}

  @Post()
  create(@Body() createLeadDto: CreateLeadDto) {
    return this.leadService.create(createLeadDto);
  }
}
