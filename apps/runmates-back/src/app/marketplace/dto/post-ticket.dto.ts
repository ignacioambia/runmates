import { IsNumber, IsString } from "class-validator";

export class PostTicketDto {
    @IsNumber()
    price: number;

    @IsString()
    reasonOfSale: string;

    @IsString()
    phone: string;
}