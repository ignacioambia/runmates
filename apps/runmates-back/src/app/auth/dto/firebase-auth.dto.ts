import { IsString } from "class-validator";

export class FirebaseAuthDto {
    @IsString()
    idToken: string;
}