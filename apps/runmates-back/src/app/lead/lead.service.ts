import { Injectable } from '@nestjs/common';
import { CreateLeadDto } from './dto/create-lead.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Lead } from './schema/lead.schema';
import { Model } from 'mongoose';

@Injectable()
export class LeadService {
  constructor(@InjectModel(Lead.name) private leadModel: Model<Lead>) {}
  create(createLeadDto: CreateLeadDto) {
    const createdLead = new this.leadModel(createLeadDto);
    return createdLead.save();
  }
}
