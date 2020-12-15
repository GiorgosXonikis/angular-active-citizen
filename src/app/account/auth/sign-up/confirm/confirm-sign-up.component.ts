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
    public error = {code: null, text: null};

    private _email: string;
    private _validationCode: string;

    constructor(private activatedRoute: ActivatedRoute,
                private authService: AuthService) {
        this.activatedRoute.params.subscribe(
            _params => {
                this._email = _params['email'];
                this._validationCode = _params['validation-code'];
            }
        );
    }

    ngOnInit() {
        this.confirmSignUp();
    }

    private confirmSignUp() {
        this.authService.confirmSignUp(this._email, this._validationCode)
            .subscribe({
                    next: () => this.confirmedSuccessfully = true,
                    error: _response => {
                        if (_response.error['active_error']) {
                            this.error.code = 'active_error';
                            this.error.text = 'Account already activated';
                        } else if (_response.error['code_error']) {
                            this.error.code = 'code_error';
                            this.error.text = 'Activation code is not valid';
                        } else {
                            this.error.code = 'server_error';
                            this.error.text = 'Server Error';
                        }
                    }
                }
            );
    }
}
