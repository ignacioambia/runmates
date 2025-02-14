import { Module } from '@nestjs/common';
import { LeadService } from './lead.service';
import { LeadController } from './lead.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Lead, LeadSchema } from './schema/lead.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: Lead.name, schema: LeadSchema }])],
  controllers: [LeadController],
  providers: [LeadService],
})
export class LeadModule {}
