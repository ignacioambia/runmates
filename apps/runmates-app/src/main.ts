import { bootstrapApplication } from '@angular/platform-browser';
import {
  RouteReuseStrategy,
  provideRouter,
  withPreloading,
  PreloadAllModules,
} from '@angular/router';
import {
  IonicRouteStrategy,
  provideIonicAngular,
} from '@ionic/angular/standalone';
import { RM_API_CONFIG } from '@runmates/ui';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { baseUrlInterceptor } from '@runmates/ui';
import { IonicStorageModule, Storage, provideStorage } from '@ionic/storage-angular';
import { importProvidersFrom } from '@angular/core';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RM_API_CONFIG, useValue: { apiUrl: import.meta.env.NG_APP_RUNMATES_BACK } },
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideHttpClient(withInterceptors([baseUrlInterceptor])),
    importProvidersFrom(IonicStorageModule.forRoot()),
  ],
});
