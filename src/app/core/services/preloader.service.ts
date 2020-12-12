import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PreloaderService {

    private preloaderSubject = new BehaviorSubject<boolean>(false);
    public preloader$ = this.preloaderSubject.asObservable();

    public show() {
        this.preloaderSubject.next(true);
    }

    public hide() {
        this.preloaderSubject.next(false);
    }

}
