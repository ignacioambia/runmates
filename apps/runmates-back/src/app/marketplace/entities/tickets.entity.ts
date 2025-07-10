import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Ticket } from "@runmates/types/marketplace";
import { UserEntity } from "../../users/entities/user.entity";

@Entity()
export class TicketEntity implements Ticket {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => UserEntity)
    @JoinColumn({ name: 'userId' })
    user: UserEntity;

    @Column()
    price: number;

    @Column()
    reasonOfSale: string;

    @Column()
    phone: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;
}
