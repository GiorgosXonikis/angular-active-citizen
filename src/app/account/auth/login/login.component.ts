import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../../core/services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    public renderValidations = false;
    public returnUrl: string;
    public error = {code: '', text: ''};

    constructor(private formBuilder: FormBuilder,
                private route: ActivatedRoute,
                private router: Router,
                private authService: AuthService) {
    }

    public loginForm = this.formBuilder.group({
        email: ['giorgos.xonikis@gmail.com', [Validators.required, Validators.email]],
        password: ['Gioxon123', Validators.required],
    });

    ngOnInit(): any {
        /** Get return url from route parameters or default to '/' */
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    onSubmit(): void {
        if (this.loginForm.invalid) {
            this.renderValidations = true;
            return;
        }

        this.authService.login(this.f.email.value, this.f.password.value)
            .subscribe({
                next: () => this.router.navigateByUrl('/profile'),
                error: () => {
                    this.error.code = 'incorrect_credentials';
                    this.error.text = 'Incorrect credentials';
                }
            });
    }

    public get f(): any {
        return this.loginForm.controls;
    }

}
