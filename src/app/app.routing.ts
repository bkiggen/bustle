import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SplashComponent } from './splash/splash.component';
// import { DetailComponent } from './detail/detail.component';

const appRoutes: Routes = [
  {
    path: '',
    component: SplashComponent
  }
  // ,
  // {
  //   path: '/detail:id',
  //   component: DetailComponent
  // }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
