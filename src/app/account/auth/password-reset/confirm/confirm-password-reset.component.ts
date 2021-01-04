import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../../../core/services/user.service';

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
export class ConfirmPasswordResetComponent implements OnInit {
    public renderValidations = false;
    public viewState = viewStateEnum.Form;
    public viewStateEnum = viewStateEnum;
    public error = {code: '', text: ''};

    private _email: string;
    private _token: string;

    constructor(private formBuilder: FormBuilder,
                private activatedRoute: ActivatedRoute,
                private userService: UserService) {
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
        validators: [this.passwordsMatchValidator()]
    });

    ngOnInit(): void {
    }

    onSubmit(): void {
        if (this.form.invalid) {
            this.renderValidations = true;
            return;
        }

        this.userService.changePassword(this.f.password.value, this.f.passwordRepeat.value, this._email, this._token)
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

    private passwordsMatchValidator() {
        return function (fg: FormGroup): ValidationErrors | null {
            const password = fg.get('password').value;
            const passwordRepeat = fg.get('passwordRepeat').value;

            if (password === passwordRepeat) {
                return null;
            }

            return {
                ['passwordMatchError']: 'Passwords do not match'
            };
        };
    }

}
