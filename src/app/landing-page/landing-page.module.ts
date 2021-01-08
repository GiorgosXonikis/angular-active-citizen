import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {LandingPageComponent} from './landing-page.component';


@NgModule({
    declarations: [
        LandingPageComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class LandingPageModule {
}
