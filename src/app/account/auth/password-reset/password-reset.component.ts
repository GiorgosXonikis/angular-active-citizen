import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {AuthService} from '../../../core/services/auth.service';

export enum viewStateEnum {
    Form = 0,
    Success = 1,
    Error = 2
}

@Component({
    selector: 'app-password-reset',
    templateUrl: './password-reset.component.html',
    styleUrls: ['./password-reset.component.scss']
})
export class PasswordResetComponent {
    public renderValidations = false;
    public viewState = viewStateEnum.Form;
    public viewStateEnum = viewStateEnum;
    public error = {code: '', text: ''};

    public resetForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
    });

    constructor(private formBuilder: FormBuilder,
                private authService: AuthService) {
    }

    public get f(): any {
        return this.resetForm.controls;
    }

    public onSubmit(): void {
        if (this.resetForm.invalid) {
            this.renderValidations = true;
            return;
        }

        this.authService.passwordReset(this.f.email.value)
            .subscribe({
                next: () => this.viewState = viewStateEnum.Success,
                error: () => {
                    this.error.code = 'email_in_use';
                    this.error.text = 'There is no account related with this email';
                    this.viewState = this.viewStateEnum.Error;
                }
            });

    }
}
