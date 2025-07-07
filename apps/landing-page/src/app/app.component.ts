import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LdHome } from './pages/home/home.component';
import { RmModule } from '@runmates/ui';
@Component({
  imports: [RouterModule, RmModule],
  selector: 'ld-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'landing-page';
}
