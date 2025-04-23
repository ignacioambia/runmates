import { InjectionToken, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { baseUrlInterceptor } from './interceptors';
import { RmDialogService } from './services';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ApiConfig } from './types/config/api-config';

export const RM_API_CONFIG = new InjectionToken<ApiConfig>('RM_API_CONFIG');


@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    provideHttpClient(withInterceptors([baseUrlInterceptor])),
    provideAnimationsAsync(),
    RmDialogService,
  ],
})
export class RmModule {}
