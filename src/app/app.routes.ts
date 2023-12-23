import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { authGuard } from './core/guards/auth.guard';
import { LoginComponent } from './modules/login/login.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [authGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/home',
  },
];
