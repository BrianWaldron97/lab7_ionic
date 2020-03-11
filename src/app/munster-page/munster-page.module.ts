import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MunsterPagePageRoutingModule } from './munster-page-routing.module';

import { MunsterPagePage } from './munster-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MunsterPagePageRoutingModule
  ],
  declarations: [MunsterPagePage]
})
export class MunsterPagePageModule {}
