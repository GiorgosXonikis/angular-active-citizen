import {Observable} from 'rxjs';
import {AuthEndpoints} from '../../../environments/api-endpoints';
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

    changePassword(newPassword: string, passwordRepeat: string, email: string, token: string): Observable<any> {
        this.preloader.show();

        const payload = {
            newPassword,
            passwordRepeat,
            email,
            token
        };

        return this.http.post(`${this.mainUrl}/${AuthEndpoints.confirmPasswordReset}/`, payload)
            .pipe(
                finalize(() => this.preloader.hide())
            );
    }

}