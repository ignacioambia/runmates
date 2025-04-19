import { Routes } from '@angular/router';
import { AppHome } from './home/home.component';
import { AppSignup } from './signup/signup.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    children: [{ path: 'home', component: AppHome }],
  },
  {
    path: 'signup',
    component: AppSignup,
  },
];
