import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true})
  name: string;

  @Column({unique: true })
  email: string;

  @Column({ nullable: true})
  averagePace: number;

  @Column({ nullable: true})
  motivation: string;
}
