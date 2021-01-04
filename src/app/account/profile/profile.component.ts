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
        bio: [{value: null, disabled: false}],
        firstName: [{value: null, disabled: false}],
        lastName: [{value: null, disabled: false}],
        phone: [{value: null, disabled: false}],
        email: [{value: null, disabled: false}],
        location: [{value: null, disabled: false}],
        languages: [{value: null, disabled: false}],
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
