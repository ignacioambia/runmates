export type TrainingIntensity = "rest" | "low" | "medium" | "high";

export interface Training {
  activities: TrainingActivity[];
  notes: string;
  intensity: TrainingIntensity;
  weekday: string
}

export interface TrainingActivity {
  title: string;
  distance?: number;
  complementary_training?: string;
}