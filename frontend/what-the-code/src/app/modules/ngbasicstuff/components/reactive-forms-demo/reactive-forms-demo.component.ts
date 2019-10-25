import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {matchTwoFieldsValidator} from "../../validators/wtc-match-two-fields-validator.directive";
import {StarterPokemonValidatorDirective} from "../../validators/starter-pokemon-validator.directive";
import {customValidator} from "../../validators/custom-sync-validator.directive";

@Component({
  selector: 'app-reactive-forms-demo',
  templateUrl: './reactive-forms-demo.component.html',
  styleUrls: ['./reactive-forms-demo.component.css']
})
export class ReactiveFormsDemoComponent implements OnInit {

  // single form control
  textInputControl = new FormControl('');

  // form group
  myFormGroup = new FormGroup( {
    mailOnly: new FormControl(''),
    numbersGroup: new FormGroup({
      integerOnly: new FormControl(0),
      oneDigitOneDecimalOnly: new FormControl(0.0),
      twoDigitsTwoDecimalsOnly: new FormControl(10.00)
    })
  });

  // form builder: factory to generate instead of creating forms manually
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private starterPokemonValidator: StarterPokemonValidatorDirective) {
    this.formGroup = this.formBuilder.group({

      // angular validators
      angularGroup: this.formBuilder.group({
        requiredInput: ['', Validators.required],
        wtcSerialnumber: ['', Validators.pattern(/[A-Z]{4}:[0-9]{7}-[a-z][0-9][a-z][0-9]/)], // example format NRKE:46351703-s1g2
        numberInput: ['', [Validators.maxLength(4), Validators.pattern(/[0-9][.,][0-9]{2}/)]],
        mailOnly: ['', [Validators.minLength(4), Validators.email]]
      }),

      // cross field validation
      matchFieldOne: [],
      matchFieldTwo: [],

      // form arrays
      dynamicFields: this.formBuilder.array([
      ]),
      dynamicGroup: this.formBuilder.array([
      ]),

      // custom validation
      customValidatorInput: ['', customValidator()],
      asyncValidationInput:
        new FormControl(
          null,
          {
            validators: Validators.minLength(3), // no pokemon name is so short, so don't unnecessary async call
            asyncValidators: this.starterPokemonValidator.validate.bind(this.starterPokemonValidator), // !! asynchronous validation only happens after the synchronous validation is successful
            updateOn: "blur" // only trigger async validator again, if user clicks outside the input field
          })

    }, {
      validator: matchTwoFieldsValidator // cross field validation
    });

  }



  ngOnInit() {
  }

  get dynamicFieldsArray(): FormArray {
    return this.formGroup.get('dynamicFields') as FormArray; // cast from AbstractControl
  }

  addToDynamicFieldsArray() {
    this.dynamicFieldsArray.push(this.formBuilder.control(''));
    console.log(this.dynamicFieldsArray);
  }

  removeFromDynamicFieldsArray(index: number) {
    this.dynamicFieldsArray.removeAt(index);
  }

  get dynamicGroupArray(): FormArray {
    return this.formGroup.get('dynamicGroup') as FormArray; // cast from AbstractControl
  }

  addToDynamicGroupArray() {
    this.dynamicGroupArray.push(this.formBuilder.group({
      name: [''],
      age: [''],
      occupation: [''],
    }));
  }

  onTest() {
    this.formGroup.patchValue({
      mailOnly: 'asdf',
      numbersGroup: {
        twoDigitsTwoDecimalsOnly: 99.99
      }
    });
  }

  onSubmit() {

  }
}
