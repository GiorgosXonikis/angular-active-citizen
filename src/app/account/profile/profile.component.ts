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
        bio: [null],
        firstName: [null],
        lastName: [null],
        phone: [null],
        email: [null],
        location: [null],
        languages: [null],
    });

    constructor(private authService: AuthService, private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.form.disable();
        this.user = this.authService.user;
        this.patchFormValues();
    }

    public update() {
        this.form.disable();
    }

    public edit() {
        this.form.enable();
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
        });
    }

}
