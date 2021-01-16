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

    constructor(private formBuilder: FormBuilder,
                private userService: UserService) {
    }

    ngOnInit(): void {
        this.createForm();
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

        this.userService.changePassword(payload).subscribe(console.log);
    }

    private createForm(): void {
        this.form = this.formBuilder.group({
            password: ['random-password', Validators.required],
            newPassword: [null, Validators.required],
            passwordRepeat: [null, Validators.required]
        }, {validators: [FormValidators.passwordsMatchValidator()]});

        this.form.disable();
    }

}
