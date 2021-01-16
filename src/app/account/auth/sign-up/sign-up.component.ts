import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {AuthService} from '../../../core/services/auth.service';
import {FormValidators} from '../../../shared/forms/validators/form-validators';

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
export class SignUpComponent {
    public renderValidations = false;
    public error = {code: '', text: ''};
    public viewState = viewStateEnum.Form;
    public viewStateEnum = viewStateEnum;

    constructor(private formBuilder: FormBuilder,
                private authService: AuthService) {
    }

    public form = this.formBuilder.group({
        email: ['giorgos.xonikis@gmail.com', [Validators.required, Validators.email]],
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

        this.authService.signUp(this.f.email.value, this.f.password.value)
            .subscribe(
                {
                    next: () => this.viewState = viewStateEnum.Success,
                    error: _response => {
                        if (_response.error.code === 'email_exists') {
                            this.error.code = 'email_exists';
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

}
