import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { SignUpComponent } from './signup/sign-up.component';
import { AuthRoutingModule } from './auth-routing';
import { ConfirmComponent } from './confirm/confirm.component';
import { PasswordResetComponent } from './passwordreset/password-reset.component';
import {LoginComponent} from './login/login.component';

@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent,
    ConfirmComponent,
    PasswordResetComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbAlertModule,
    // WidgetModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
