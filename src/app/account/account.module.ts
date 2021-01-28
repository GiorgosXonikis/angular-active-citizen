import {NgModule} from '@angular/core';
import {AccountRoutingModule} from './account-routing.module';
import {AuthModule} from './auth/auth.module';
import {ProfileComponent} from './profile/profile.component';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {PreLoaderModule} from '../shared/components/preloader/preloader.module';
import {ChangePasswordComponent} from './profile/change-password/change-password.component';
import {PasswordValidationModule} from '../shared/forms/password-validation/password-validation.module';
import {CardErrorModule} from '../shared/components/card-error/card-error.module';
import {NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    declarations: [
        ProfileComponent,
        ChangePasswordComponent
    ],
    imports: [
        AuthModule,
        AccountRoutingModule,
        ReactiveFormsModule,
        BrowserModule,
        PreLoaderModule,
        PasswordValidationModule,
        CardErrorModule,
        NgbAlertModule
    ]
})
export class AccountModule {
}
