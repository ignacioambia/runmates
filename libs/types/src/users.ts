export interface User {
  name: string;
  email: string;
  averagePace: number;
  motivation: string;
}

export type RegisterUserResponse = { userId: number,  token: string }; 