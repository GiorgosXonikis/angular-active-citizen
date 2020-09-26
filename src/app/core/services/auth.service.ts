import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CookieService} from './cookie.service';
import {IUser} from '../models/interfaces';
import {tap} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    public user: IUser;
    private _token: string;

    constructor(private http: HttpClient,
                private cookieService: CookieService) {
    }

    /**
     * Performs the auth
     * @param username of user
     * @param password password of user
     */
    public login(username: string, password: string): Observable<any> {
        const URL = 'http://localhost:8000/api/token/';
        return this.http.post<any>(URL, {username, password}).pipe(
            tap(response => this.getUserProfile(response.access)
                .subscribe(
                    userProfile => this.extractUserData(userProfile)
                ))
        );
    }

    public getUserProfile(token: string): Observable<any> {
        const URL = 'http://localhost:8000/api/me/';
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        });
        return this.http.get(URL, {headers});
    }

    private extractUserData(user): void {
        this.user = {};
        this.user.id = user['id'];
        this.user.username = user['username'];
        this.user.email = user['email'];
        this.user.firstName = user['first_name'];
        this.user.lastName = user['last_name'];
        this.user.avatar = user['avatar'];
        this.user.location = user['location'];
        this.user.token = this.token;
        this.user.firstName;
        console.log(this.user);
    }

    public getLoggedInUser(): IUser {
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
