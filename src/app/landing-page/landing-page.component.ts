import {Component} from '@angular/core';
import {AuthService} from '../core/services/auth-service/auth.service';
import {environment} from '../../environments/environment';

@Component({
    selector: 'app-landing-page',
    templateUrl: './landing-page.component.html',
    styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {

    constructor(private authService: AuthService) {
    }

    get isUserLoggedIn(): boolean {
        return !!this.authService.user;
    }

    get userAbbreviation(): string {
        if (!this.isUserLoggedIn) {
            return null;
        }

        const user = this.authService.user;
        return user.firstName || user.lastName || user.email;
    }

    get environmentName(): string {
        return environment.name;
    }


}
