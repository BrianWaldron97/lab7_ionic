import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MunsterPagePage } from './munster-page.page';

const routes: Routes = [
  {
    path: '',
    component: MunsterPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MunsterPagePageRoutingModule {}
