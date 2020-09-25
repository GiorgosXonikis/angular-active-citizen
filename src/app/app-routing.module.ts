import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

const routes: Routes = [
  { path: 'account', loadChildren: () => import('./account/account.module').then(m => m.AccountModule) },
];

@NgModule({
  imports: [
    HttpClientModule,
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
