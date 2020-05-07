import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[emailValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: EmailValidatorDirective, multi: true}]
})
export class EmailValidatorDirective implements Validator {
  constructor() {
  }
  validate(control: AbstractControl): {[key: string]: any | null} {
    // tslint:disable-next-line:max-line-length
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|(([a-zA-Z0-9]+[-]*\.)+[a-zA-Z]{2,}))$/.test(control.value) ? null : {
      invalidEmail : { value: control.value}

    };
  }
}
