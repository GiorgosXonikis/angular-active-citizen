import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {AuthService} from '../../../core/services/auth.service';

export enum PasswordResetStepEnum {
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
    public passwordResetStep = PasswordResetStepEnum.Form;
    public passwordResetStepEnum = PasswordResetStepEnum;
    public error: string;

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
                next: () => this.passwordResetStep = PasswordResetStepEnum.Success,
                error: () => this.passwordResetStep = PasswordResetStepEnum.Error
            });

    }
}
