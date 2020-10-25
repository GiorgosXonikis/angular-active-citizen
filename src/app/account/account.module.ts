import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AccountRoutingModule} from './account-routing.module';
import {AuthModule} from './auth/auth.module';
import {PreLoaderModule} from '../shared/components/preloader/preloader.module';
import {ProfileComponent} from './profile/profile.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
    declarations: [
        ProfileComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AuthModule,
        PreLoaderModule,

        AccountRoutingModule
    ]
})
export class AccountModule {
}
