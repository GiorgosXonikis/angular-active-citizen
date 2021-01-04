import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CookieService} from './cookie.service';
import {finalize, map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {PreloaderService} from './preloader.service';
import {JsonConvert} from 'json2typescript';
import {AuthEndpoints} from '../../../environments/api-endpoints';
import {environment} from '../../../environments/environment';
import {Auth, User} from '../../shared/models/auth';


@Injectable({
    providedIn: 'root'
})
export class AuthService {
    public accessToken: string;
    public user: User;

    private _converter = new JsonConvert();
    private readonly mainUrl = environment.host;

    constructor(private http: HttpClient,
                private preloader: PreloaderService,
                private cookieService: CookieService) {
    }

    signUp(email: string, password: string, passwordRepeat: string): Observable<any> {
        this.preloader.show();

        const payload = {
            'email': email,
            'password': password,
            'password_repeat': passwordRepeat
        };

        return this.http.post(`${this.mainUrl}/${AuthEndpoints.signUp}/`, payload)
            .pipe(
                finalize(() => this.preloader.hide())
            );
    }

    activate(email: string, activationCode: string): Observable<any> {
        this.preloader.show();

        const payload = {
            email,
            activationCode
        };

        return this.http.patch(`${this.mainUrl}/${AuthEndpoints.activate}`, payload)
            .pipe(
                finalize(() => this.preloader.hide())
            );
    }

    login(email: string, password: string): Observable<User> {
        this.preloader.show();

        return this.http.post<Auth>(`${this.mainUrl}/${AuthEndpoints.login}/`, {email, password})
            .pipe(
                map(_auth => {
                    const {accessToken, user} = <Auth>this._converter.deserialize(_auth, Auth);
                    this.accessToken = accessToken;
                    this.user = user;
                    this.cookieService.setCookie('user', JSON.stringify(user), 7);
                    return this.user;
                }),
                finalize(() => this.preloader.hide())
            );
    }

    logout(): Observable<any> {
        /** Remove user from cookies */
        this.cookieService.deleteCookie('user');
        this.user = null;

        /** Disable user's token in backend */
        return this.http.post(`${this.mainUrl}/${AuthEndpoints.logout}/`, {});
    }

    resetPassword(email: string): Observable<any> {
        this.preloader.show();

        const payload = {
            'email': email
        };

        return this.http.post(`${this.mainUrl}/${AuthEndpoints.resetPassword}/`, payload)
            .pipe(
                finalize(() => this.preloader.hide())
            );
    }

    public getUser(): User {
        if (!this.user) {
            this.user = JSON.parse(this.cookieService.getCookie('user'));
        }
        return this.user;
    }

}
