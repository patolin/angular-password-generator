import { AbstractControl, FormArray, ValidatorFn } from '@angular/forms';

export default class Validation {

  static validateCheckboxes(min: number = 1) {
    console.log("validando");
    const validator: (ValidatorFn | any) = (formArray: FormArray) => {
      const totalSelected = formArray.controls
        .map(control => control.value)
        .reduce((prev, next) => next ? prev + next : prev, 0);
  
      return totalSelected >= min ? null : { required: true };
    };
  
    return validator;
  }


}