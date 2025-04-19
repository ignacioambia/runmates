import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true})
  name: string;

  @Column({unique: true, nullable: true})
  email: string;

  @Column({ nullable: true})
  averagePace: number;

  @Column({ nullable: true})
  motivation: string;
}
