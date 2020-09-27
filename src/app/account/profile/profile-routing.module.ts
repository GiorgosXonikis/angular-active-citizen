import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ProfileComponent} from './profile/profile.component';
import {AuthGuard} from '../../core/guards/auth.guard';

const routes: Routes = [
    {path: '', component: ProfileComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProfileRoutingModule {
}

