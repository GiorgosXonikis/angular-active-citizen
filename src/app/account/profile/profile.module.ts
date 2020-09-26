import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsModule as ChartJSModule } from 'ng2-charts';

import { ProfileComponent } from './profile/profile.component';
import { ProfileRoutingModule } from './profile-routing.module';

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    // ChartJSModule,

    ProfileRoutingModule
  ]
})
export class ProfileModule { }
