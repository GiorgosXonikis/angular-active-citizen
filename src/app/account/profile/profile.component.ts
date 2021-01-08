import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../core/services/auth.service';
import {FormBuilder} from '@angular/forms';
import {User} from '../../shared/models/auth';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
    public user: User;

    public form = this.formBuilder.group({
        bio: [{value: null, disabled: true}],
        firstName: [{value: null, disabled: true}],
        lastName: [{value: null, disabled: true}],
        phone: [{value: null, disabled: true}],
        email: [{value: null, disabled: true}],
        location: [{value: null, disabled: true}],
        languages: [{value: null, disabled: true}],
    });

    constructor(private authService: AuthService, private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.user = this.authService.user;
        this.patchFormValues();
    }

    public updateProfile() {
        console.log(this.form.value);
    }

    public editProfile() {
        for (let control of Object.keys(this.form.controls)) {
            this.form.get(control).enable();
        }
        console.log(this.form.controls);
        console.log(Object.keys(this.form.controls));
    }

    public logout() {
        this.authService.logout().subscribe();
    }

    private patchFormValues() {
        this.form.patchValue({
            bio: this.user.bio,
            firstName: this.user.firstName,
            lastName: this.user.lastName,
            phone: this.user.phone,
            email: this.user.email,
            location: this.user.location,
            languages: this.user.languages,
        })
    }

}
