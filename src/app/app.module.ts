import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {NgbAlertModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CommonModule} from '@angular/common';
import {LandingPageModule} from './landing-page/landing-page.module';
import {AccountModule} from './account/account.module';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {JwtInterceptor} from './core/interceptors/jwt.interceptor';
import {AppInitializerService, initializeApp} from './core/services/app-initializer-service/app-initializer.service';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CommonModule,
        ReactiveFormsModule,
        NgbModule,
        NgbAlertModule,

        /** App Modules */
        LandingPageModule,
        AccountModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: JwtInterceptor,
            multi: true
        },
        {
            provide: APP_INITIALIZER,
            multi: true,
            useFactory: initializeApp,
            deps: [AppInitializerService]
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
