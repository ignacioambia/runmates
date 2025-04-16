import { Exact } from "@runmates/types/common";
import { User } from "@runmates/types/users";
import { IsEmail, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateUserDto implements Exact<CreateUserDto, User>{
 @IsString()
 @IsOptional()
 name: string;

 @IsEmail()
 email: string;

 @IsNumber()
 @IsOptional()
 averagePace: number;

 @IsString()
 @IsOptional()
 motivation: string;
}
