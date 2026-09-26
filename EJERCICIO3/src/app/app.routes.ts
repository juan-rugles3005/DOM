import { Routes } from '@angular/router';
import { GalleryPage } from './gallery/gallery.page';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'gallery',
    component: GalleryPage,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];