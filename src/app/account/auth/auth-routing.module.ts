import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfirmComponent } from './confirm/confirm.component';
import { PasswordResetComponent } from './passwordreset/password-reset.component';
import {LoginComponent} from './login/login.component';
import {SignUpComponent} from './sign-up/sign-up.component';

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
        path: 'confirm',
        component: ConfirmComponent
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
