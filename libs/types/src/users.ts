export interface User {
  name: string;
  email: string;
  averagePace: number;
  motivation: string;
}

export type RegisterUserResponse = { user: User,  token: string }; 