import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    { path: '', loadComponent: () => import('./pages/home/home.component').then(m => m.LdHome) },
    { path: 'marketplace', loadComponent: () => import('./pages/marketplace/marketplace.component').then(m => m.LdMarketplace) },
    { path: 'marketplace/vender-boleto', loadComponent: () => import('./pages/marketplace/sell/sell.component').then(m => m.LdSell) },
];
