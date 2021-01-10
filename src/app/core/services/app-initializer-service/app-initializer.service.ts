import {Injectable} from '@angular/core';
import {AuthService} from '../auth.service';
import {UserService} from '../user.service';

@Injectable({providedIn: 'root'})
export class AppInitializerService {

    constructor(private authService: AuthService,
                private userService: UserService) {
    }

    async init(): Promise<void> {
        this.authService.getAccessToken();

        await this.userService.getUser().toPromise();
    }
}

export function initializeApp(appInitializerService: AppInitializerService) {
    return () => appInitializerService.init();
}
