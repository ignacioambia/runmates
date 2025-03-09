import { Schema, SchemaFactory } from "@nestjs/mongoose";
import { Training, WeekDay } from "@runmates/types";
import { HydratedDocument } from "mongoose";

export type CatDocument = HydratedDocument<TrainingPlan>;

@Schema()
export class TrainingPlan implements Record<string, Record<WeekDay, Training>>{
 [week: string]: Record<WeekDay, Training>
}

export const TrainingPLanSchema = SchemaFactory.createForClass(TrainingPlan);