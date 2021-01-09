import {Observable} from 'rxjs';
import {AuthEndpoints, UserEndpoints} from '../../../environments/api-endpoints';
import {finalize} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PreloaderService} from './preloader.service';
import {environment} from '../../../environments/environment';
import {User} from '../../shared/models/auth';
import {CookieService} from './cookie.service';


@Injectable({
    providedIn: 'root'
})
export class UserService {
    private readonly mainUrl = environment.host;

    constructor(private http: HttpClient,
                private cookiesService: CookieService,
                private preloader: PreloaderService) {
    }

    getUser(): Observable<User> {
        this.preloader.show();

        return this.http.get<User>(`${this.mainUrl}/${UserEndpoints.profile}/`)
            .pipe(
                finalize(() => this.preloader.hide())
            );
    }

    patchUser(user: User): Observable<User> {
        this.preloader.show();

        return this.http.patch<User>(`${this.mainUrl}/${UserEndpoints.profile}/`, user)
            .pipe(
                finalize(() => this.preloader.hide())
            );
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
