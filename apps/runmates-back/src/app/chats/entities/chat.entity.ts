import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ChatEntity {
 @PrimaryGeneratedColumn()
 id: number;

 @Column()
 userId: number;
 
 @CreateDateColumn()
 createdAt: Date;
}