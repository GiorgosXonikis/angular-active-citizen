import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ClickOutsideModule } from 'ng-click-outside';
import { SimplebarAngularModule } from 'simplebar-angular';

// import { UIModule } from '../../shared/ui/ui.module';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { RightSidebarComponent } from './right-sidebar/right-sidebar.component';


@NgModule({
  declarations: [LeftSidebarComponent, FooterComponent, RightSidebarComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    // ClickOutsideModule,
    SimplebarAngularModule,
    // UIModule
  ],
  exports: [
    LeftSidebarComponent, FooterComponent, RightSidebarComponent
  ],
})
export class SharedModule { }
