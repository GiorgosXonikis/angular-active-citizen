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
        bio: [{value: 'Lorem Ipsum', disabled: false}],
        firstName: [{value: 'George', disabled: false}],
        surname: [{value: 'Xonikis', disabled: false}],
        mobile: [{value: '+41 12345678', disabled: false}],
        email: [{value: 'george@gmail.com', disabled: false}],
        location: [{value: 'Zurich', disabled: false}],
        languages: [{value: 'English, Greek', disabled: false}],
    });

    constructor(private authService: AuthService, private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.user = this.authService.user;
    }

    public updateProfile() {
        console.log(this.form.value);
    }

}
