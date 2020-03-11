import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeinsterPagePageRoutingModule } from './leinster-page-routing.module';

import { LeinsterPagePage } from './leinster-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeinsterPagePageRoutingModule
  ],
  declarations: [LeinsterPagePage]
})
export class LeinsterPagePageModule {}
