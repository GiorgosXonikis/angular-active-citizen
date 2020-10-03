import {NgModule} from '@angular/core';
import {PreloaderComponent} from './preloader.component';
import {CommonModule} from '@angular/common';


@NgModule({
    declarations: [
        PreloaderComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        PreloaderComponent
    ]
})
export class PreLoaderModule {
}
