import {NgModule} from '@angular/core';
import {NgbAlertModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {PreLoaderModule} from '../shared/components/preloader/preloader.module';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';


@NgModule({
    imports: [
        // Angular modules
        ReactiveFormsModule,
        CommonModule,
        RouterTestingModule,
        HttpClientTestingModule,

        // 3rd party modules
        NgbAlertModule,
        NgbModule,

        // App modules
        PreLoaderModule,
    ]
})
export class CommonTestingModules {
}
