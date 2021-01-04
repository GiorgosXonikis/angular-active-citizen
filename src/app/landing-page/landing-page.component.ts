import {Component, OnInit} from '@angular/core';
import {AuthService} from '../core/services/auth.service';

@Component({
    selector: 'app-landing-page',
    templateUrl: './landing-page.component.html',
    styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

    constructor(private authService: AuthService) {
    }

    ngOnInit() {
    }

    get isUserLoggedIn(): boolean {
        return !!this.authService.user;
    }

    get userAbbreviation(): string {
        const user = this.authService.user;
        return user.firstName || user.lastName || user.email;
    }


}
