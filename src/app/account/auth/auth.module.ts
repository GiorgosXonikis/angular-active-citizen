import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import {AuthRoutingModule} from './auth-routing.module';
import {ConfirmComponent} from './confirm/confirm.component';
import {PasswordResetComponent} from './passwordreset/password-reset.component';
import {LoginComponent} from './login/login.component';
import {PreLoaderModule} from '../../shared/components/preloader/preloader.module';
import {SignUpComponent} from './sign-up/sign-up.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        NgbAlertModule,
        // WidgetModule,

        AuthRoutingModule,
        PreLoaderModule
    ],
    declarations: [
        LoginComponent,
        SignUpComponent,
        ConfirmComponent,
        PasswordResetComponent
    ],
})
export class AuthModule {
}
