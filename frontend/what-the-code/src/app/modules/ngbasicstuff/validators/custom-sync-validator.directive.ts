/** A hero's name can't match the given regular expression */
import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export function customValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    console.log(control.value);
    return null; // validation successful
  };
}
