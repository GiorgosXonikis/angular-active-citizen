import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {NgbDropdownModule, NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';
import {SimplebarAngularModule} from 'simplebar-angular';

// import { UIModule } from '../../shared/ui/ui.module';
import {SharedModule} from '../shared/shared.module';
import {LayoutComponent} from './layout/layout.component';
import {TopbarComponent} from './topbar/topbar.component';
import {TopnavComponent} from './topnav/topnav.component';

@NgModule({
    declarations: [LayoutComponent, TopbarComponent, TopnavComponent],
    imports: [
        CommonModule,
        RouterModule,
        NgbDropdownModule,
        NgbCollapseModule,
        SimplebarAngularModule,
        // UIModule,
        SharedModule
    ],
    exports: [LayoutComponent, TopbarComponent, TopnavComponent]
})
export class HorizontalLayoutModule {
}
