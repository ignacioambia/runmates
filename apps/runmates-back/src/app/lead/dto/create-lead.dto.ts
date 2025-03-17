import { IsEmail, IsOptional, IsString } from "class-validator";
import { Lead } from '@runmates/types/leads';
import { Exact } from '@runmates/types/common';

export class CreateLeadDto implements Exact<CreateLeadDto, Lead> {
 @IsString()
 @IsOptional()
 name: string;

 @IsEmail()
 email: string;
}
