import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CookieService} from './cookie.service';
import {catchError, finalize, tap} from 'rxjs/operators';
import {EMPTY, Observable} from 'rxjs';
import {Router} from '@angular/router';
import {PreloaderService} from './preloader.service';
import {User} from '../../shared/models/auth';
import {JsonConvert} from 'json2typescript';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private _converter = new JsonConvert();

    public user: User;
    private _token: string;

    constructor(private http: HttpClient,
                private router: Router,
                private preloaderService: PreloaderService,
                private cookieService: CookieService) {
    }

    public login(email: string, password: string): Observable<any> {
        const URL = 'http://localhost:8000/auth/login/';
        return this.http.post<any>(URL, {email, password})
            .pipe(
                tap(response => {
                    this._token = response.access;
                    this.getUserProfile(this._token).subscribe();
                }),
                catchError(() => {
                    this.preloaderService.hide();
                    alert('Incorrect Credentials');
                    return EMPTY;
                })
            );
    }

    public getUserProfile(token: string): Observable<any> {
        const URL = 'http://localhost:8000/api/me/';
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        });
        return this.http.get(URL, {headers})
            .pipe(
                tap(_userProfile => {
                    this.user = <User>this._converter.deserialize(_userProfile, User);
                    this.cookieService.setCookie('loggedInUser', JSON.stringify(this.user), 1);
                }),
                finalize(() => {
                    this.preloaderService.hide();
                    this.router.navigate(['/profile']);
                })
            );
    }

    public getLoggedInUser(): User {
        if (!this.user) {
            this.user = JSON.parse(this.cookieService.getCookie('loggedInUser'));
        }
        return this.user;
    }

    public get token(): string {
        if (!this._token) {
            this.user = JSON.parse(this.cookieService.getCookie('loggedInUser'));
            return this.user.token;
        }
        return this._token;
    }

    public set token(value: string) {
        this._token = value;
    }

    /**
     * Logout the user
     */
    public logout(): void {
        // remove user from local storage to log user out
        this.cookieService.deleteCookie('loggedInUser');
        this.user = null;
        this._token = null;
    }


}
