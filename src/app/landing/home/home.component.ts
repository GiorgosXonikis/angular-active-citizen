import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../core/services/auth.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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
