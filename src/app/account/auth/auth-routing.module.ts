import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {ConfirmSignUpComponent} from './sign-up/confirm/confirm-sign-up.component';
import {PasswordResetComponent} from './password-reset/password-reset.component';
import {ConfirmPasswordResetComponent} from './password-reset/confirm/confirm-password-reset.component';

const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'signup',
        component: SignUpComponent
    },
    {
        path: 'signup/activate/:email/:activation-code',
        component: ConfirmSignUpComponent
    },
    {
        path: 'password/reset',
        component: PasswordResetComponent
    },
    {
        path: 'password/reset/confirm/:uid/:token',
        component: ConfirmPasswordResetComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {
}
