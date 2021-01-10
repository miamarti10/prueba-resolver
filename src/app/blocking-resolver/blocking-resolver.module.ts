import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BlockingResolverPageRoutingModule } from './blocking-resolver-routing.module';

import { BlockingResolverPage } from './blocking-resolver.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BlockingResolverPageRoutingModule
  ],
  declarations: [BlockingResolverPage]
})
export class BlockingResolverPageModule {}
