export type TrainingStatus = "completed" | "skippped";
export type TrainingIntensity = "rest" | "low" | "medium" | "high";
export type WeekDay = 'Monday' | 'Tuesday'  | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';
export interface Training {
  activities: TrainingActivity[];
  notes: string;
  intensity: TrainingIntensity;
  weekday: WeekDay
}

export interface TrainingActivity {
  title: string;
  distance?: number;
  complementary_training?: string;
}