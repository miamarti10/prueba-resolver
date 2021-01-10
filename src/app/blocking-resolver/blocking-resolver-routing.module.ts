import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlockingResolverPage } from './blocking-resolver.page';

const routes: Routes = [
  {
    path: '',
    component: BlockingResolverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlockingResolverPageRoutingModule {}
