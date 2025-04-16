import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  // Generate a JWT token for a user
  generateToken(payload: { id: number; email: string }): string {
    return this.jwtService.sign(payload); // Sign the payload with the secret
  }

  // Validate a JWT token (optional, if needed for custom validation)
  validateToken(token: string): any {
    try {
      return this.jwtService.verify(token); // Verify the token using the secret
    } catch (error) {
      throw new Error('Invalid token'); // Handle invalid tokens
    }
  }
}
