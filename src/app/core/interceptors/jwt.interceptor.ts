import {Injectable} from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from '../services/auth.service';
import {CookieService} from '../services/cookie.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService, private cookieService: CookieService) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        const loggedInUser = this.authService.getLoggedInUser();

        if (loggedInUser && loggedInUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${loggedInUser.token}`
                }
            });
        }

        return next.handle(request);
    }
}
