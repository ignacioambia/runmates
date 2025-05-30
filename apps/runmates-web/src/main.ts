import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { WebComponent } from './app/app.component';

bootstrapApplication(WebComponent, appConfig).catch((err) =>
  console.error(err)
);
