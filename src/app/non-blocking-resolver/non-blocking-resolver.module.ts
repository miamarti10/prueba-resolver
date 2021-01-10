import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NonBlockingResolverPageRoutingModule } from './non-blocking-resolver-routing.module';

import { NonBlockingResolverPage } from './non-blocking-resolver.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NonBlockingResolverPageRoutingModule
  ],
  declarations: [NonBlockingResolverPage]
})
export class NonBlockingResolverPageModule {}
