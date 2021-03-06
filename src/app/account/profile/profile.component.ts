import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {User} from '../../shared/models/auth';
import {UserService} from '../../core/services/user.service';
import {FormsService} from '../../core/services/forms-service/forms.service';
import {AuthService} from '../../core/services/auth-service/auth.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
    providers: [FormsService]
})
export class ProfileComponent implements OnInit {
    public user: User;
    public form: FormGroup;
    @ViewChild('bio') bio: ElementRef;

    constructor(private authService: AuthService,
                private userService: UserService,
                private formBuilder: FormBuilder,
                private formsService: FormsService<User>) {
    }

    ngOnInit() {
        this.createForm();
        this.getUser();
    }

    private createForm(): void {
        this.form = this.formBuilder.group({
            bio: [null],
            firstName: [null],
            lastName: [null],
            age: [null],
            sex: [null],
            phone: [null],
            location: [null],
            languages: [null],
        });

        this.form.disable();
    }

    private getUser(): void {
        this.userService.getUser().subscribe(
            _user => {
                this.user = this.authService.user = _user || null;

                /** Patch model values to form */
                this.formsService.modelToForm(this.user, this.form);
            }
        );
    }

    saveUser(): void {
        this.form.disable();

        if (this.form.pristine) {
            return;
        }

        /** Extract form values */
        this.formsService.formToModel(this.form, this.user);

        this.userService.patchUser(this.user).subscribe(
            () => this.form.markAsPristine()
        );
    }

    logout(): void {
        this.authService.logout().subscribe();
    }

    enableForm() {
        this.form.enable();
        this.bio.nativeElement.focus();
    }

}

