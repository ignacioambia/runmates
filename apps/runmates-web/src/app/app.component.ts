import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  imports: [NxWelcomeComponent, RouterModule],
  selector: 'web-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class WebComponent {
  title = 'runmates-web';
}
