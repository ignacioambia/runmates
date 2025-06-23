export interface User {
  name: string;
  motivation: string;
  frequency: string;
  goal: number;
}

export type RegisterUserResponse = { userId: number,  token: string }; 