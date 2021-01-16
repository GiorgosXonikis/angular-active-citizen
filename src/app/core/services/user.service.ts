import {Observable} from 'rxjs';
import {UserEndpoints} from '../../../environments/api-endpoints';
import {finalize, tap} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PreloaderService} from './preloader.service';
import {environment} from '../../../environments/environment';
import {User} from '../../shared/models/auth';
import {CookieService} from './cookie.service';
import {AuthService} from './auth-service/auth.service';


@Injectable({
    providedIn: 'root'
})
export class UserService {
    private readonly mainUrl = environment.host;

    constructor(private http: HttpClient,
                private cookiesService: CookieService,
                private authService: AuthService,
                private preloader: PreloaderService) {
    }

    getUser(): Observable<User> {
        this.preloader.show();

        return this.http.get<User>(`${this.mainUrl}/${UserEndpoints.profile}/`)
            .pipe(
                tap(_user => this.authService.user = _user),
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

    changePassword(payload: { password: string, newPassword: string, passwordRepeat: string }): Observable<any> {
        this.preloader.show();

        return this.http.patch(`${this.mainUrl}/${UserEndpoints.changePassword}/`, payload)
            .pipe(
                finalize(() => this.preloader.hide())
            );
    }

}
