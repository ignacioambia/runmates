import { User } from '@runmates/types/users';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserEntity implements User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true})
  firebaseUid: string;

  @Column({ nullable: true})
  email: string;

  @Column({ nullable: true})
  photoURL?: string;

  @Column({ nullable: true})
  name: string;

  @Column({ nullable: true})
  averagePace: number;

  @Column({ nullable: true})
  motivation: string;

  @Column({ nullable: true})
  frequency: string;

  @Column({ nullable: true})
  goal: number;
}
