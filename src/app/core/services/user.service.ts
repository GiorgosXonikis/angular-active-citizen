import {Observable} from 'rxjs';
import {UserEndpoints} from '../../../environments/api-endpoints';
import {finalize} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {PreloaderService} from './preloader.service';
import {environment} from '../../../environments/environment';
import {Auth} from '../../shared/models/auth';


@Injectable({
    providedIn: 'root'
})
export class UserService {
    public user: Auth;
    private readonly mainUrl = environment.host;

    constructor(private http: HttpClient,
                private router: Router,
                private preloader: PreloaderService) {
    }

    changePassword(newPassword: string, repeatPassword: string, uid: string, token: string): Observable<any> {
        this.preloader.show();

        const payload = {
            'new_password1': newPassword,
            'new_password2': repeatPassword,
            'uid': uid,
            'token': token
        };

        return this.http.post(`${this.mainUrl}/${UserEndpoints.changePassword}/`, payload)
            .pipe(
                finalize(() => this.preloader.hide())
            );
    }

}