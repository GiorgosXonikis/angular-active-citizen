import {NgModule} from '@angular/core';
import {AccountRoutingModule} from './account-routing.module';
import {AuthModule} from './auth/auth.module';
import {ProfileComponent} from './profile/profile.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
    declarations: [
        ProfileComponent
    ],
    imports: [
        AuthModule,
        AccountRoutingModule,
        ReactiveFormsModule
    ]
})
export class AccountModule {
}
