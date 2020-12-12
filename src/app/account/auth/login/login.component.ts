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
    renderValidations = false;
    returnUrl: string;

    constructor(private formBuilder: FormBuilder,
                private route: ActivatedRoute,
                private router: Router,
                private authService: AuthService) {
    }

    public loginForm = this.formBuilder.group({
        email: ['giorgos.xonikis@gmail.com', [Validators.required, Validators.email]],
        password: ['gioxon1985', Validators.required],
    });

    ngOnInit(): any {
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    onSubmit(): void {
        if (this.loginForm.invalid) {
            this.renderValidations = true;
            return;
        }

        this.authService.login(this.f.email.value, this.f.password.value)
            .subscribe(() => {
                this.router.navigateByUrl('/profile');
            });
    }

    public get f(): any {
        return this.loginForm.controls;
    }

}
