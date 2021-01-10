import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'blocking-resolver',
    loadChildren: () => import('./blocking-resolver/blocking-resolver.module').then( m => m.BlockingResolverPageModule)
  },
  {
    path: 'non-blocking-resolver',
    loadChildren: () => import('./non-blocking-resolver/non-blocking-resolver.module').then( m => m.NonBlockingResolverPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
