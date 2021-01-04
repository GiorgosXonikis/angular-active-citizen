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
    private _activationCode: string;

    constructor(private activatedRoute: ActivatedRoute,
                private authService: AuthService) {
        this.activatedRoute.params.subscribe(
            _params => {
                this._email = _params['email'];
                this._activationCode = _params['activation-code'];
            }
        );
    }

    ngOnInit() {
        this.activate();
    }

    private activate() {
        this.authService.activate(this._email, this._activationCode)
            .subscribe({
                    next: () => this.confirmedSuccessfully = true,
                    error: _response => {
                        this.error.code = _response.error.code;
                        if (this.error.code === 'active_error') {
                            this.error.text = 'Account already activated';
                        } else if (this.error.code === 'email_or_activation_code_error') {
                            this.error.text = 'Invalid email or activation code';
                        } else {
                            this.error.code = 'server_error';
                            this.error.text = 'Server Error. Please try again in a while.';
                        }
                    }
                }
            );
    }
}
