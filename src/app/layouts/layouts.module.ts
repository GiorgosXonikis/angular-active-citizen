import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from './shared/shared.module';
import { LayoutContainerComponent } from './layout-container.component';
import {HorizontalLayoutModule} from './horizontal/horizontal.module';


@NgModule({
  declarations: [LayoutContainerComponent],
    imports: [
        CommonModule,
        RouterModule,
        SharedModule,
        HorizontalLayoutModule
    ]
})
export class LayoutsModule { }
