import { bootstrapApplication } from '@angular/platform-browser';
import { WebComponent } from './app/app.component';
import { config } from './app/app.config.server';

const bootstrap = () => bootstrapApplication(WebComponent, config);

export default bootstrap;
