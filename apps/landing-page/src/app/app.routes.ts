import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    { path: '', loadComponent: () => import('./pages/home/home.component').then(m => m.LdHome) },
    { path: 'marketplace', loadComponent: () => import('./pages/marketplace/marketplace.component').then(m => m.LdMarketplace) },
];
