import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {catchError, map, tap} from 'rxjs/operators';

import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../../core/services/auth.service';
import {EMPTY} from "rxjs";

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
    // tslint:disable-next-line: no-string-literal
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onSubmit(): void {
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.authService.login(this.f.email.value, this.f.password.value)
      .pipe(
        map(response => {
          this.authService.token = response.access;
          return this.authService.getUserProfile(this.authService.token);
        }),
        catchError(() => {
          alert('Incorrect Credentials');
          return EMPTY;
        })
      ).subscribe(data => {
      return this.router.navigate(['/']);
    });

  }

  private extractUserData(user): void {
    this.authService.user = {};
    this.authService.user.id = user['id'];
    this.authService.user.username = user['username'];
    this.authService.user.email = user['email'];
    this.authService.user.firstName = user['first_name'];
    this.authService.user.lastName = user['last_name'];
    this.authService.user.avatar = user['avatar'];
    this.authService.user.location = user['location'];
    this.authService.user.token = this.authService.token;
  }

  get f(): any {
    return this.loginForm.controls;
  }

  // onSubmit2(): void {
  //   this.submitted = true;
  //
  //   // stop here if form is invalid
  //   if (this.loginForm.invalid) {
  //     return;
  //   }
  //
  //   this.loading = true;
  //   this.authService
  //     .login(this.f.email.value, this.f.password.value)
  //     .pipe(first())
  //     .subscribe(
  //       (data) => {
  //         this.router.navigate([this.returnUrl]);
  //       },
  //       (error) => {
  //         this.error = error;
  //         this.loading = false;
  //       }
  //     );
  // }
}
