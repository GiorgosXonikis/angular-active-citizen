import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {AuthService} from '../../../core/services/auth.service';

export enum viewStateEnum {
    Form = 0,
    Success = 1,
    Error = 2
}

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
    public renderValidations = false;
    public error = {code: '', text: ''};
    public viewState = viewStateEnum.Form;
    public viewStateEnum = viewStateEnum;

    constructor(private formBuilder: FormBuilder,
                private authService: AuthService) {
    }

    public form = this.formBuilder.group({
        email: ['giorgos.xonikis@gmail.com', [Validators.required, Validators.email]],
        password: ['gioxon1985', Validators.required],
        passwordRepeat: ['gioxon1985', Validators.required],
        // email: ['', [Validators.required, Validators.email]],
        // password: ['', Validators.required],
        // passwordRepeat: ['', Validators.required],
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

        this.authService.signUp(this.f.email.value, this.f.password.value, this.f.passwordRepeat.value)
            .subscribe(
                {
                    next: () => this.viewState = viewStateEnum.Success,
                    error: _response => {
                        if (_response.error.email) {
                            this.error.code = 'email_in_use';
                            this.error.text = 'Email already in use';
                            this.viewState = this.viewStateEnum.Error;
                        }
                    }
                }
            );
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
