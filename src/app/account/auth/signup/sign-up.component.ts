import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit, AfterViewInit {

  signupForm: FormGroup;
  submitted = false;
  error = '';
  loading = false;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.signupForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  ngAfterViewInit(): void {
    // document.body.classList.add('authentication-bg');
  }

  // convenience getter for easy access to form fields
  get f(): any { return this.signupForm.controls; }

  /**
   * On submit form
   */
  onSubmit(): void {
    this.submitted = true;

    // stop here if form is invalid
    if (this.signupForm.invalid) {
      return;
    }

    this.loading = true;

    console.log(this.signupForm.value);
    setTimeout(() => {
      this.loading = false;
      this.router.navigate(['/account/confirm']);
    }, 1000);
  }
}
