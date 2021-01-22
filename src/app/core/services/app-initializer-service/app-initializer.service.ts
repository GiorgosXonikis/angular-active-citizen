import {Injectable} from '@angular/core';
import {UserService} from '../user.service';
import {AuthService} from '../auth-service/auth.service';

@Injectable({providedIn: 'root'})
export class AppInitializerService {

    constructor(private authService: AuthService,
                private userService: UserService) {
    }

    async init(): Promise<void> {
        const accessToken = this.authService.getAccessToken();

        if (!accessToken) {
            return;
        }

        await this.userService.getUser().toPromise().catch(() => null);
    }
}

export function initializeApp(appInitializerService: AppInitializerService) {
    return () => appInitializerService.init();
}
