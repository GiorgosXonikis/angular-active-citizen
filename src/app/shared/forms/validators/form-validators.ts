import {AbstractControl, FormGroup, ValidationErrors, ValidatorFn} from '@angular/forms';

export class FormValidators {

    static passwordsMatchValidator() {
        return function (fg: FormGroup): ValidationErrors | null {
            const password = fg.get('newPassword') ? fg.get('newPassword').value : fg.get('password').value;
            const passwordRepeat = fg.get('passwordRepeat').value;

            if (password === passwordRepeat) {
                return null;
            }

            return {
                ['passwordMatchError']: 'Passwords do not match'
            };
        };
    }

    static numberOfChars(chars: number): ValidatorFn {
        return (control: AbstractControl): { [key: string]: string } | null => {
            if (control.value && control.value.length === chars) {
                return null;
            }
            return {numberOfCharsError: `This word should contain exactly ${chars} chars.`};
        };
    }

    static UUIDv4Validator(control: AbstractControl): ValidationErrors | null {
        const uuidV4Regex = /^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i;
        if (!control.value || control.value.length !== 36 || !uuidV4Regex.test(control.value)) {
            return {
                uuidError: 'This is not a valid UUID'
            };
        }
        return null;
    }

    static weakPassword(control: AbstractControl): ValidationErrors | null {
        const pattern = /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
        if (!control.value || control.value.length < 8 || !pattern.test(control.value)) {
            return {
                weakPasswordError: 'This password is too weak not a valid UUID'
            };
        }
        return null;
    }


}

