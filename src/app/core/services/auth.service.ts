import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CookieService} from './cookie.service';
import {finalize, map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {PreloaderService} from './preloader.service';
import {JsonConvert} from 'json2typescript';
import {AuthEndpoints, UserEndpoints} from '../../../environments/api-endpoints';
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

    login(email: string, password: string): Observable<User> {
        this.preloader.show();

        return this.http.post<Auth>(`${this.mainUrl}/${AuthEndpoints.login}/`, {email, password})
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
        return this.http.post(`${this.mainUrl}/${UserEndpoints.logout}/`, {})
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

    passwordReset(email: string): Observable<any> {
        this.preloader.show();

        return this.http.post(`${this.mainUrl}/${AuthEndpoints.passwordReset}/`, {email})
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

export function initialiseAuthProviderFactory(authService: AuthService) {
    return () => authService.getAccessToken();
}
