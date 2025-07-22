import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { baseUrlInterceptor, authTokenInterceptor, RM_API_CONFIG } from '@runmates/ui';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(withEventReplay()),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(withInterceptors([baseUrlInterceptor, authTokenInterceptor])),
    provideRouter(appRoutes),
    provideFirebaseApp(() => initializeApp({
      apiKey: "AIzaSyBB8A2UUXr6RUhP4EqHRtit84FvPpn6w3w",
      authDomain: "runmates-59458.firebaseapp.com",
      projectId: "runmates-59458",
      storageBucket: "runmates-59458.firebasestorage.app",
      messagingSenderId: "1095554576244",
      appId: "1:1095554576244:web:1df98f260b536a59190621",
      measurementId: "G-9SV3GPQ33P"
    })),
    provideAuth(() => getAuth()),
    { provide: RM_API_CONFIG, useValue: { apiUrl: 'https://runmates-back-icy-shadow-4369.fly.dev' } },
  ],
};
