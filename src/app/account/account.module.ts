import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { LayoutsModule } from '../layouts/layouts.module';
import { ProfileModule } from './profile/profile.module';
import { AccountRoutingModule } from './account-routing.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // AccountRoutingModule,
    // LayoutsModule,
    // ProfileModule,
    AuthModule
  ]
})
export class AccountModule { }
