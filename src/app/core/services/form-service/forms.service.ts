import {Injectable} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Injectable()
export class FormsService<T> {

    /** Method which fills the form controls with the values from the model */
    public modelToForm?(model: T, form: FormGroup): void {
        const properties = Object.keys(model);
        const controls = Object.keys(form.controls);

        properties.forEach(property => {
            if (controls.includes(property)) {
                form.get(property).patchValue(model[property]);
            }
        });
    }

    /** Method to extract the values from the form and update the model */
    public formToModel?(form: FormGroup, model: T): void {
        const properties = Object.keys(form.controls);

        properties.forEach(property => {
            model[property] = form.getRawValue()[property];
        });
    }

}
