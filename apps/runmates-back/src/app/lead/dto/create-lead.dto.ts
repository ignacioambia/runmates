import { IsEmail, IsOptional, IsString } from "class-validator";

export class CreateLeadDto {
 @IsString()
 @IsOptional()
 name: string;

 @IsEmail()
 email: string;
}
