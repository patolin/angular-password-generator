import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { of } from 'rxjs';
import Validation from './utils/validation';
// import Validation from './utils/validation';

@Component({
  selector: 'app-password-generator',
  templateUrl: './password-generator.component.html',
  styleUrls: ['./password-generator.component.scss'],
})
export class PasswordGeneratorComponent implements OnInit {
  text: String = '';
  arrayOfConditions: any[] = [];
  form!: FormGroup;
  submitted:boolean = false;

  getListCheckboxes() {
    return [
      { id: 1, name: "chkLetters", title: "Use Letters" },
      { id: 2, name: "chkNumbers", title: "Use Numbers" },
      { id: 3, name: "chkSymbols", title: "Use Symbols" },
    ]
  }

  get chkConditionsFormArray() {
    return this.form.controls.chkConditions as FormArray;
  }

  constructor(private formBuilder: FormBuilder) {
    this.text = 'Button was clicked';

  }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        passLength: ['', [Validators.required, Validators.min(4)]],
        chkConditions: new FormArray([], Validation.validateCheckboxes(1)),

      }
    )
    
    of(this.getListCheckboxes()).subscribe(
      conditions => {
        this.arrayOfConditions=conditions;
        this.addCheckboxes();

      }
    )
    
  }

  private addCheckboxes() {
    this.arrayOfConditions.forEach(() => this.chkConditionsFormArray.push(new FormControl(false)));
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }


  generateClicked() {
    this.submitted = true;

    if (this.form.invalid) {
      console.log('form invalido');
    }
    console.log(this.text);
  }

  onCheckBoxTick(event: any, formField: any, key: any) {
    console.log(key);
    console.log(event, formField, formField.value);  

  }

}
