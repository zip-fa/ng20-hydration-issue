/* eslint-disable array-element-newline */
import type { Routes } from '@angular/router';

import NotFoundComponent from './not-found.component';

export const routes: Routes = [
  {
    path: 'lazy',
    loadComponent: async () => import('./not-found.component')
  },
  {
    path: 'non-lazy',
    component: NotFoundComponent
  }
];
