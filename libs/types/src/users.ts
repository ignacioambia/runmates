export interface User {
  firebaseUid: string;
  email: string;
  photoURL?: string;
  name: string;
  motivation: string;
  frequency: string;
  goal: number;
}

export type RegisterUserResponse = { userId: number,  token: string }; 