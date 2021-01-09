import {Injectable} from '@angular/core';
import {AuthService} from '../auth.service';
import {UserService} from '../user.service';

@Injectable({providedIn: 'root'})
export class AppInitializerService {

    constructor(private authService: AuthService,
                private userService: UserService) {
    }

    init() {
        this.authService.getAccessToken();

        this.userService.getUser().subscribe();
    }
}

export function initializeApp(appInitializerService: AppInitializerService) {
    return () => appInitializerService.init();
}
