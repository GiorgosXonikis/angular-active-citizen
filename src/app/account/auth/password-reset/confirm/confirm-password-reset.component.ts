import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../../../core/services/user.service';
import {FormValidators} from '../../../../shared/forms/validators/form-validators';
import {AuthService} from '../../../../core/services/auth.service';

export enum viewStateEnum {
    Form = 0,
    Success = 1,
    Error = 2
}

@Component({
    selector: 'app-confirm-password-reset',
    templateUrl: './confirm-password-reset.component.html',
    styleUrls: ['./confirm-password-reset.component.scss']
})
export class ConfirmPasswordResetComponent {
    public renderValidations = false;
    public viewState = viewStateEnum.Form;
    public viewStateEnum = viewStateEnum;
    public error = {code: '', text: ''};

    private _email: string;
    private _token: string;

    constructor(private formBuilder: FormBuilder,
                private activatedRoute: ActivatedRoute,
                private authService: AuthService) {
        this.activatedRoute.params.subscribe(
            _params => {
                this._email = _params['email'];
                this._token = _params['token'];
            }
        );
    }

    public form = this.formBuilder.group({
        password: ['Gioxon1985', Validators.required],
        passwordRepeat: ['Gioxon1985', Validators.required],
    }, {
        validators: [FormValidators.passwordsMatchValidator()]
    });

    onSubmit(): void {
        if (this.form.invalid) {
            this.renderValidations = true;
            return;
        }

        this.authService.confirmPasswordReset(this.f.password.value, this.f.passwordRepeat.value, this._email, this._token)
            .subscribe({
                next: () => this.viewState = viewStateEnum.Success,
                error: () => {
                    this.error.code = 'server_error';
                    this.error.text = `Server Error.\nPlease try again in a while.`;
                    this.viewState = this.viewStateEnum.Error;
                }
            });
    }

    public get f(): any {
        return this.form.controls;
    }

}
