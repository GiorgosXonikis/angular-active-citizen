import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {PasswordResetComponent} from './password-reset/password-reset.component';
import {ConfirmSignUpComponent} from './sign-up/confirm/confirm-sign-up.component';

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
        path: 'signup/confirm/:email/:validation-code',
        component: ConfirmSignUpComponent
    },
    {
        path: 'reset-password',
        component: PasswordResetComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
