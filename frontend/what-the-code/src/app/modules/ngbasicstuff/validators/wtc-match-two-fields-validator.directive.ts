/** two fields have to match */
import {FormGroup, ValidationErrors, ValidatorFn} from "@angular/forms";

export const matchTwoFieldsValidator: ValidatorFn = (control: FormGroup) => {
  const firstField = control.get('matchFieldOne');
  const secondField = control.get('matchFieldTwo');

  // validation successful
  if ((firstField.value === null || firstField.value === '') && (secondField.value === null || secondField.value === '')) {
    return null;
  }

  if (firstField.value === secondField.value) {
    return null;
  }

  // validation fails
  return {
    matchTwoFieldsValidatorError: 'two fields do not match'
  }
};
