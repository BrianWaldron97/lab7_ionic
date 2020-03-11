import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'ulster-page',
    loadChildren: () => import('./ulster-page/ulster-page.module').then( m => m.UlsterPagePageModule)
  },
  {
    path: 'munster-page',
    loadChildren: () => import('./munster-page/munster-page.module').then( m => m.MunsterPagePageModule)
  },
  {
    path: 'connaught-page',
    loadChildren: () => import('./connaught-page/connaught-page.module').then( m => m.ConnaughtPagePageModule)
  },
  {
    path: 'leinster-page',
    loadChildren: () => import('./leinster-page/leinster-page.module').then( m => m.LeinsterPagePageModule)
  },
  {
    path: 'leinster-counties',
    loadChildren: () => import('./leinster-counties/leinster-counties.module').then( m => m.LeinsterCountiesPageModule)
  },
  {
    path: 'connaught-counties-page',
    loadChildren: () => import('./connaught-counties-page/connaught-counties-page.module').then( m => m.ConnaughtCountiesPagePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
