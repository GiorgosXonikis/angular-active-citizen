import {NgModule} from '@angular/core';
import {PasswordValidationComponent} from './password-validation.component';
import {CommonModule} from '@angular/common';

@NgModule({
    declarations: [
        PasswordValidationComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        PasswordValidationComponent
    ]
})
export class PasswordValidationModule {

}
