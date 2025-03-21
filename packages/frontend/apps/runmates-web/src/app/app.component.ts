import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  imports: [RouterModule],
  selector: 'web-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class WebComponent {
  title = 'runmates-web';
}
