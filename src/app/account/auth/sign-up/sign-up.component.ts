import {Component, OnInit, AfterViewInit} from '@angular/core';
import {FormBuilder, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {AuthService} from '../../../core/services/auth.service';
import {PreloaderService} from '../../../core/services/preloader.service';

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit, AfterViewInit {
    public renderValidations = false;
    public registrationSuccessful = false;


    constructor(private formBuilder: FormBuilder,
                private authService: AuthService,
                private preloader: PreloaderService) {
    }

    public form = this.formBuilder.group({
        email: ['giorgos.xonikis@gmail.com', [Validators.required, Validators.email]],
        password: ['gioxon1985', Validators.required],
        passwordRepeat: ['gioxon1985', Validators.required],
        // email: ['', [Validators.required, Validators.email]],
        // password: ['', Validators.required],
        // passwordRepeat: ['', Validators.required],
    }, {
        validators: [this.passwordsMatch()]
    });

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
        // document.body.classList.add('authentication-bg');
    }

    onSubmit(): void {
        if (this.form.invalid) {
            this.renderValidations = true;
            return;
        }

        this.authService.signUp(this.f.email.value, this.f.password.value, this.f.passwordRepeat.value)
            .subscribe(
                {
                    next: () => this.registrationSuccessful = true
                }
            );
    }

    public get f(): any {
        return this.form.controls;
    }

    private passwordsMatch() {
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
