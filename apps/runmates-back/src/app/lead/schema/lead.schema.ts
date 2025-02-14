import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type CatDocument = HydratedDocument<Lead>;

@Schema()
export class Lead {
 @Prop()
 name: string;

 @Prop({ required: true })
 email: string;
}

export const LeadSchema = SchemaFactory.createForClass(Lead);