import { Body, Controller, Post, Inject, forwardRef } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public } from '../common/decorators/public.decorator';
import { FirebaseAuthDto } from './dto/firebase-auth.dto';
import { UsersService } from '../users/users.service';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
        @Inject(forwardRef(() => UsersService))
        private readonly usersService: UsersService
    ) {}

    @Public()
    @Post('firebase')
    async firebaseAuth(@Body() { idToken }: FirebaseAuthDto) {
        const userInfo = await this.authService.authenticateWithFirebase(idToken);
        return this.usersService.loginFirebaseUser(userInfo);
    }
}