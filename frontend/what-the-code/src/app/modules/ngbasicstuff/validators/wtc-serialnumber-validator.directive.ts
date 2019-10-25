/** A hero's name can't match the given regular expression */
import {AbstractControl, ValidatorFn} from "@angular/forms";

export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    if (nameRe.test(control.value)) {
      return {
        forbiddenName: {
          value: control.value
        }
      };
    } else {
      return null; // validation successful
    }
  };
}
