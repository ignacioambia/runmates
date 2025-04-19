import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { map, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

export const isAuthenticatedGuard: CanActivateFn = (_route, _state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.isAuthenticated$.pipe(
    tap((isAuthenticated) => !isAuthenticated && router.navigate(['/login'])),
  );
};

export const isUnauthenticatedGuard: CanActivateFn = (_route, _state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.isAuthenticated$.pipe(
    tap((isAuthenticated) => isAuthenticated && router.navigate(['/home'])),
    map((isAuthenticated) => !isAuthenticated),
  );
};
