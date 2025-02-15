import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LdHome } from './pages/home/home.component';
@Component({
  imports: [RouterModule, LdHome],
  selector: 'ld-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'landing-page';
}
