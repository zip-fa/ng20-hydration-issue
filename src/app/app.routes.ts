/* eslint-disable array-element-newline */
import type { Routes } from '@angular/router';

import NotFoundComponent from './not-found.component';
import BreweryComponent from './brewery';

export const routes: Routes = [
  {
    path: 'lazy',
    loadComponent: async () => import('./not-found.component')
  },
  {
    path: 'non-lazy',
    component: NotFoundComponent
  },
  {
    path: '**',
    component: BreweryComponent
  },
];
