import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import {LandingPageComponent} from './landing-page.component';


@NgModule({
    declarations: [
        LandingPageComponent
    ],
    imports: [
        CommonModule,
        NgbDropdownModule,
        RouterModule
    ]
})
export class LandingPageModule {
}
