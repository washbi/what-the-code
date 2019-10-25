import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {forbiddenNameValidator} from "../../validators/wtc-serialnumber-validator.directive";
import {matchTwoFieldsValidator} from "../../validators/wtc-match-two-fields-validator.directive";

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

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      requiredInput: ['', Validators.required],
      wtcSerialnumber: ['', forbiddenNameValidator(/bob/i)],
      mailOnly: ['', [Validators.minLength(4), Validators.email]],
      matchFieldOne: [], // cross field validation
      matchFieldTwo: [], // cross field validation
      numbersGroup: this.formBuilder.group({
        integerOnly: [0],
        oneDigitOneDecimalOnly: [0.0],
        twoDigitsTwoDecimalsOnly: [10.00, Validators.min(10)],
      }),
      dynamicFields: this.formBuilder.array([
      ]),
      dynamicGroup: this.formBuilder.array([
      ]),
    }, {
      validator: matchTwoFieldsValidator // cross field validation
    });
  }

  // !! asynchronous validation only happens after the synchronous validation is successful

  ngOnInit() {
  }

  get dynamicFieldsArray(): FormArray {
    return this.formGroup.get('dynamicFields') as FormArray; // cast from AbstractControl
  }

  addToDynamicFieldsArray() {
    this.dynamicFieldsArray.push(this.formBuilder.control(''));
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
