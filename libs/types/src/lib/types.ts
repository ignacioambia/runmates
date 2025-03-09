export interface Training {
  activities: TrainingActivity[];
  notes: string;
  intensity: "low" | "medium" | "high" | "rest";
  weekday: string
}

export interface TrainingActivity {
  title: string;
  distance?: number;
  complementary_training?: string;
}