import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../../core/services/auth-service/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    form: FormGroup;
    renderValidations = false;
    returnUrl: string;
    error = {code: '', text: ''};

    constructor(private formBuilder: FormBuilder,
                private route: ActivatedRoute,
                private router: Router,
                private authService: AuthService) {
    }

    ngOnInit(): any {
        this.createForm();
        
        /** Get return url from route parameters or default to '/' */
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    private createForm() {
        this.form = this.formBuilder.group({
            email: ['giorgos.xonikis@gmail.com', [Validators.required, Validators.email]],
            password: ['Gioxon1985', Validators.required],
        });
    }

    onSubmit(): void {
        if (this.form.invalid) {
            this.renderValidations = true;
            return;
        }

        this.authService.login(this.form.get('email').value, this.form.get('password').value)
            .subscribe({
                next: () => this.router.navigateByUrl('/profile'),
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
