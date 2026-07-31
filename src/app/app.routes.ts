import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Escalas } from './pages/escalas/escalas';
import { Manifestos } from './pages/manifestos/manifestos';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'manifestos',
    component: Manifestos
  },
  {
    path: 'escalas',
    component: Escalas
  },
  {
    path: '**',
    redirectTo: ''
  }
];