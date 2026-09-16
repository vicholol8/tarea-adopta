import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.page').then((m) => m.LoginPage),
  },
  {
    path: 'registro',
    loadComponent: () =>
      import('./pages/registro/registro.page').then((m) => m.RegistroPage),
  },
  {
    path: '',
    loadComponent: () =>
      import('./pages/galeria/galeria.page').then((m) => m.GaleriaPage),
      canActivate: [authGuard]
  },
  {
    path: 'detalle/:id',
    loadComponent: () =>
      import('./pages/detalle/detalle.page').then((m) => m.DetallePage),
      canActivate: [authGuard]
  },
  {
    path: 'nuevo',
    loadComponent: () =>
      import('./pages/nuevo/nuevo.page').then((m) => m.NuevoPage),
      canActivate: [authGuard]
  },
  {
    path: 'editar/:id',
    loadComponent: () => import('./pages/editar/editar.page').then( m => m.EditarPage),
    canActivate: [authGuard]
  }
];
