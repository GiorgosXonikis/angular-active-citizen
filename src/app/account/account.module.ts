import {NgModule} from '@angular/core';
import {AccountRoutingModule} from './account-routing.module';
import {AuthModule} from './auth/auth.module';
import {ProfileComponent} from './profile/profile.component';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {PreLoaderModule} from '../shared/components/preloader/preloader.module';

@NgModule({
    declarations: [
        ProfileComponent
    ],
    imports: [
        AuthModule,
        AccountRoutingModule,
        ReactiveFormsModule,
        BrowserModule,
        PreLoaderModule
    ]
})
export class AccountModule {
}
