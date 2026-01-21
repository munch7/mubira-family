import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
        path: 'home',
        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'about',
        loadComponent: () => import('./about/about.component').then(m => m.AboutComponent)
    },
    {
        path: 'tree',
        loadComponent: () => import('./tree/tree.component').then(m => m.TreeComponent)
    },
    {
        path: 'social',
        loadComponent: () => import('./social/social.component').then(m => m.SocialComponent)
    }
];
