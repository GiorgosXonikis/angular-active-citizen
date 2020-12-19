import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CookieService} from './cookie.service';
import {finalize, map, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {PreloaderService} from './preloader.service';
import {AuthUser} from '../../shared/models/auth';
import {JsonConvert} from 'json2typescript';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    public authUser: AuthUser;

    private _converter = new JsonConvert();
    private readonly mainUrl = 'http://localhost:8000';

    constructor(private http: HttpClient,
                private router: Router,
                private preloader: PreloaderService,
                private cookieService: CookieService) {
    }

    public login(email: string, password: string): Observable<AuthUser> {
        this.preloader.show();

        return this.http.post<AuthUser>(`${this.mainUrl}/auth/login/`, {email, password})
            .pipe(
                map(_response => <AuthUser>this._converter.deserialize(_response, AuthUser)),
                tap(_authUser => this.authUser = _authUser),
                finalize(() => this.preloader.hide())
            );
    }

    public logout(): Observable<any> {
        /** Remove user from local storage to log user out */
        this.cookieService.deleteCookie('loggedInUser');
        this.authUser.user = null;

        /** Delete user's token from db */
        return this.http.post(`${this.mainUrl}/auth/logout/`, {});
    }

    public signUp(email: string, password: string, passwordRepeat: string): Observable<any> {
        this.preloader.show();

        const payload = {
            'email': email,
            'password': password,
            'password_repeat': passwordRepeat
        };

        return this.http.post(`${this.mainUrl}/signup/`, payload)
            .pipe(
                finalize(() => this.preloader.hide())
            );
    }

    public confirmSignUp(email: string, validationCode): Observable<any> {
        this.preloader.show();

        const payload = {
            'email': email,
            'validation_code': validationCode
        };

        return this.http.post(`${this.mainUrl}/signup/confirm/`, payload)
            .pipe(
                finalize(() => this.preloader.hide())
            );
    }

    public resetPassword(email: string): Observable<any> {
        this.preloader.show();

        const payload = {
            'email': email
        };

        return this.http.post(`${this.mainUrl}/auth/password/reset/`, payload)
            .pipe(
                finalize(() => this.preloader.hide())
            );
    }

    public changePassword(newPassword: string, repeatPassword: string, uid: string, token: string): Observable<any> {
        this.preloader.show();

        const payload = {
            'new_password1': newPassword,
            'new_password2': repeatPassword,
            'uid': uid,
            'token': token
        };

        return this.http.post(`${this.mainUrl}/auth/password/reset/confirm/`, payload)
            .pipe(
                finalize(() => this.preloader.hide())
            );
    }

    public getLoggedInUser(): AuthUser {
        if (!this.authUser) {
            this.authUser = JSON.parse(this.cookieService.getCookie('loggedInUser'));
        }
        return this.authUser;
    }

}
