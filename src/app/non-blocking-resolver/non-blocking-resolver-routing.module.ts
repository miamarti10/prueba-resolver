import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NonBlockingResolverPage } from './non-blocking-resolver.page';

const routes: Routes = [
  {
    path: '',
    component: NonBlockingResolverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NonBlockingResolverPageRoutingModule {}
