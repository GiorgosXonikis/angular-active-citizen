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
    submitted = false;
    returnUrl: string;
    error = '';
    loading = false;

    constructor(private formBuilder: FormBuilder,
                private route: ActivatedRoute,
                private router: Router,
                private authService: AuthService) {
    }

    public loginForm = this.formBuilder.group({
        // email: ['gxo', [Validators.required, Validators.email]],
        email: ['gxo', [Validators.required]],
        password: ['gxo', Validators.required],
    });

    ngOnInit(): any {
        // reset login status
        this.authService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    onSubmit(): void {
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.authService.login(this.f.email.value, this.f.password.value).subscribe();
    }

    get f(): any {
        return this.loginForm.controls;
    }

}
