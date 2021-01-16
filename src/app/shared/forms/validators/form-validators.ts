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


}
