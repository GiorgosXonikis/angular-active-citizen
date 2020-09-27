import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileComponent } from './profile/profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [ProfileComponent],
    imports: [
        CommonModule,

        ProfileRoutingModule,
        ReactiveFormsModule
    ]
})
export class ProfileModule { }
