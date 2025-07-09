import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as admin from 'firebase-admin';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService implements OnModuleInit {
  private firebaseApp: admin.app.App;

  constructor(
    private configService: ConfigService,
    private readonly jwtService: JwtService,
  ) {}

  onModuleInit() {
    // Initialize Firebase Admin SDK with the correct structure
    this.firebaseApp = admin.initializeApp({
      credential: admin.credential.cert({
        projectId: this.configService.get<string>('FIREBASE_PROJECT_ID'),
        clientEmail: this.configService.get<string>('FIREBASE_CLIENT_EMAIL'),
        // Replace escaped newlines in the private key
        privateKey: this.configService.get<string>('FIREBASE_PRIVATE_KEY')
          ? this.configService.get<string>('FIREBASE_PRIVATE_KEY').replace(/\\n/g, '\n')
          : undefined,
      }),
      // You can include other Firebase config options here if needed
      // databaseURL: this.configService.get<string>('FIREBASE_DATABASE_URL'),
    });
  }

  // Generate a JWT token for a user
  generateToken(payload: { id: number }): string {
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

  async authenticateWithFirebase(idToken: string): Promise<any> {
    try {
      const decodedToken = await this.firebaseApp.auth().verifyIdToken(idToken); // Ensure Firebase Auth is initialized
      // This method should call the Firebase service to verify the ID token
      // and return user information or create a new user in your system.
      
      // Return user information from the decoded token
      return {
        firebaseUid: decodedToken.uid,
        email: decodedToken.email,
        emailVerified: decodedToken.email_verified,
        displayName: decodedToken.name || null,
        photoURL: decodedToken.picture || null,
      };
    } catch (error) {
      console.error('Firebase authentication failed:', error);
      throw new Error(`Firebase authentication failed: ${error.message}`);
    }
  }
}
