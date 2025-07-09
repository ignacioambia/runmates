import { Exact } from "@runmates/types/common";
import { User } from "@runmates/types/users";
import { IsEmail, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateUserDto implements Exact<CreateUserDto, User> {
    @IsString()
    @IsOptional()
    name: string;

    @IsString()
    @IsOptional()
    motivation: string;

    @IsString()
    @IsOptional()
    firebaseUid: string;


    @IsString()
    @IsOptional()
    email: string;

    @IsString()
    @IsOptional()
    frequency: string;

    @IsNumber()
    @IsOptional()
    goal: number;


}
