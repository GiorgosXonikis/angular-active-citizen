import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SignInLinkComponent} from './sign-in-link.component';
import {RouterModule} from '@angular/router';


@NgModule({
    declarations: [
        SignInLinkComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        SignInLinkComponent
    ]
})
export class SignInLinkModule {
}
