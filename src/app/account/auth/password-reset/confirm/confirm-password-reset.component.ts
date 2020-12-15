import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {AuthService} from '../../../../core/services/auth.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-confirm-password-reset',
    templateUrl: './confirm-password-reset.component.html',
    styleUrls: ['./confirm-password-reset.component.scss']
})
export class ConfirmPasswordResetComponent implements OnInit {
    public renderValidations = false;
    private _uid: string;
    private _token: string;

    constructor(private formBuilder: FormBuilder,
                private activatedRoute: ActivatedRoute,
                private authService: AuthService) {
        this.activatedRoute.params.subscribe(
            _params => {
                this._uid = _params['uid'];
                this._token = _params['token'];
            }
        );
    }

    public form = this.formBuilder.group({
        password: ['gioxon1985', Validators.required],
        passwordRepeat: ['gioxon1985', Validators.required],
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

        this.authService.changePassword(this.f.password.value, this.f.passwordRepeat.value, this._uid, this._token).subscribe();

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
