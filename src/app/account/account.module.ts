import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileModule } from './profile/profile.module';
import { AccountRoutingModule } from './account-routing.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProfileModule,
    AuthModule,

    AccountRoutingModule
  ]
})
export class AccountModule { }
