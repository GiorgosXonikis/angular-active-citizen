import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {LandingPageComponent} from './landing-page/landing-page.component';

const routes: Routes = [
    {path: '', component: LandingPageComponent},
    {path: 'account', loadChildren: () => import('./account/account.module').then(m => m.AccountModule)},
];

@NgModule({
    imports: [
        HttpClientModule,
        RouterModule.forRoot(routes, { scrollPositionRestoration: 'top', relativeLinkResolution: 'legacy' })
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {
}
