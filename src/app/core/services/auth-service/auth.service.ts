import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {finalize, map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {JsonConvert} from 'json2typescript';
import {Auth, User} from '../../../shared/models/auth';
import {environment} from '../../../../environments/environment';
import {PreloaderService} from '../preloader.service';
import {CookieService} from '../cookie.service';
import {AuthUrls, UserUrls} from '../../../../config/urls';


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

    login(email: string, password: string): Observable<User> {
        this.preloader.show();

        return this.http.post<Auth>(`${this.mainUrl}/${AuthUrls.login}/`, {email, password})
            .pipe(
                map(_auth => {
                    const {accessToken, user} = <Auth>this._converter.deserialize(_auth, Auth);
                    this.accessToken = accessToken;
                    this.user = user;
                    const activeCitizen = {accessToken};
                    this.cookieService.setCookie('activeCitizen', JSON.stringify(activeCitizen), 7);
                    return this.user;
                }),
                finalize(() => this.preloader.hide())
            );
    }

    logout(): Observable<any> {
        /** Disable the access token in backend */
        return this.http.post(`${this.mainUrl}/${UserUrls.logout}/`, {})
            .pipe(
                finalize(() => {
                    /** Delete cookie as well as both user and access token from memory */
                    this.cookieService.deleteCookie('activeCitizen');
                    this.user = null;
                    this.accessToken = null;
                })
            );
    }

    signUp(email: string, password: string): Observable<any> {
        this.preloader.show();

        const payload = {
            email,
            password,
        };

        return this.http.post(`${this.mainUrl}/${AuthUrls.signUp}/`, payload)
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

        return this.http.patch(`${this.mainUrl}/${AuthUrls.activate}`, payload)
            .pipe(
                finalize(() => this.preloader.hide())
            );
    }

    passwordReset(email: string): Observable<any> {
        this.preloader.show();

        return this.http.post(`${this.mainUrl}/${AuthUrls.passwordReset}/`, {email})
            .pipe(
                finalize(() => this.preloader.hide())
            );
    }

    confirmPasswordReset(newPassword: string, passwordRepeat: string, email: string, token: string): Observable<any> {
        this.preloader.show();

        const payload = {
            newPassword,
            passwordRepeat,
            email,
            token
        };

        return this.http.post(`${this.mainUrl}/${AuthUrls.confirmPasswordReset}/`, payload)
            .pipe(
                finalize(() => this.preloader.hide())
            );
    }

    public getAccessToken(): string {
        if (!this.accessToken) {
            const activeCitizen = JSON.parse(this.cookieService.getCookie('activeCitizen'));
            return this.accessToken = activeCitizen ? activeCitizen.accessToken : null;
        }
        return this.accessToken;
    }

}
