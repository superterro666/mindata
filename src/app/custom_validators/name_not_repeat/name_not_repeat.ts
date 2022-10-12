import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { nameExist } from 'src/app/modules/heros/store/hero.store';


export function NameNotRepeatValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const value = control.value;
        if (!value) {
            return null;
        }
        return nameExist(value) ? { name: true } : null;
    }
}