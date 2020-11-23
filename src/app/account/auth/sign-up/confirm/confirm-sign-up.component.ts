import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AuthService} from '../../../../core/services/auth.service';

@Component({
    selector: 'app-confirm',
    templateUrl: './confirm-sign-up.component.html',
    styleUrls: ['./confirm-sign-up.component.scss']
})
export class ConfirmSignUpComponent implements OnInit {

    public confirmedSuccessfully: boolean = false;
    private _email: string;
    private _validationCode: string;

    constructor(private activatedRoute: ActivatedRoute,
                private authService: AuthService) {
        this.activatedRoute.params.subscribe(
            _params => {
                this._email = _params['email'];
                this._validationCode = _params['validation-code']
            }
        )
    }

    ngOnInit() {
        this.authService.confirmSignUp(this._email, this._validationCode)
            .subscribe(() => this.confirmedSuccessfully = true)
    }

}
