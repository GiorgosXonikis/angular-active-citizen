import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PreloaderService {

    private preloaderSubject = new BehaviorSubject<boolean>(false);
    public preloader$ = this.preloaderSubject.asObservable();

    public show() {
        console.log('Show');
        this.preloaderSubject.next(true);
    }

    public hide() {
        console.log('Hide');
        this.preloaderSubject.next(false);
    }

}
