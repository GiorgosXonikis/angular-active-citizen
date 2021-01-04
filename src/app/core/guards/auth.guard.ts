import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {AuthService} from '../services/auth.service';


@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authService: AuthService) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const user = this.authService.getUser();
        if (user) {
            return true;
        }

        /** We store the query parameters object so when the user Log In to redirect to this url.
         *  Check in Login Component object params.
         */
        this.router.navigate(['/login'],
            {
                queryParams: {triedToAccessURL: state.url}
            });
        return false;
    }
}
