import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UlsterPagePageRoutingModule } from './ulster-page-routing.module';

import { UlsterPagePage } from './ulster-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UlsterPagePageRoutingModule
  ],
  declarations: [UlsterPagePage]
})
export class UlsterPagePageModule {}
