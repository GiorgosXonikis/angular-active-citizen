import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import {AuthRoutingModule} from './auth-routing.module';
import {LoginComponent} from './login/login.component';
import {PreLoaderModule} from '../../shared/components/preloader/preloader.module';
import {SignUpComponent} from './sign-up/sign-up.component';
import {PasswordResetComponent} from './password-reset/password-reset.component';
import {ConfirmSignUpComponent} from './sign-up/confirm/confirm-sign-up.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        NgbAlertModule,
        AuthRoutingModule,
        PreLoaderModule
    ],
    declarations: [
        LoginComponent,
        SignUpComponent,
        ConfirmSignUpComponent,
        PasswordResetComponent
    ],
})
export class AuthModule {
}
