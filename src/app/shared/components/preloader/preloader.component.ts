import {Component, Input} from '@angular/core';
import {PreloaderService} from '../../../core/services/preloader.service';

@Component({
    selector: 'app-ui-preloader',
    templateUrl: './preloader.component.html',
    styleUrls: ['./preloader.component.scss']
})
export class PreloaderComponent {

    constructor(public preloaderService: PreloaderService) {
    }

}
