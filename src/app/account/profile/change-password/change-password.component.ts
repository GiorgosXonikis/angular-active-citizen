import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../../core/services/user.service';
import {FormValidators} from '../../../shared/forms/validators/form-validators';

@Component({
    selector: 'app-change-password',
    templateUrl: './change-password.component.html',
    styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
    @Input() showForm: boolean = true;
    @ViewChild('currentPassword') currentPassword: ElementRef;

    form: FormGroup;
    renderValidations: boolean;
    error = {code: '', text: ''};
    success = '';

    constructor(private formBuilder: FormBuilder,
                private userService: UserService) {
    }

    ngOnInit(): void {
        this.createForm();
    }

    private createForm(): void {
        this.form = this.formBuilder.group({
            password: ['Gioxon1985', Validators.required],
            newPassword: ['', [Validators.required, FormValidators.weakPassword]],
            passwordRepeat: ['', Validators.required]
        }, {validators: [FormValidators.passwordsMatchValidator()]});

        this.form.disable();
    }

    enableForm() {
        this.form.enable();
        this.form.reset();
        this.currentPassword.nativeElement.focus();
    }

    changePassword(): void {
        if (this.form.invalid) {
            this.renderValidations = true;
            return;
        }

        const payload = {
            password: this.form.get('password').value,
            newPassword: this.form.get('newPassword').value,
            passwordRepeat: this.form.get('passwordRepeat').value
        };

        this.userService.changePassword(payload).subscribe({
            next: () => {
                this.success = 'Password changed successfully';
                this.form.disable();
                },
            error: (err) => {
                if (err.error.statusCode === 401) {
                    this.error.code = 'incorrect_credentials';
                    this.error.text = 'Incorrect credentials';
                } else {
                    this.error.code = 'server_error';
                    this.error.text = 'Server error. Please try again in a while.';
                }
            }
        });
    }

}
