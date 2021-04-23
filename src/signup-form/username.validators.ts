import { AbstractControl } from '@angular/forms';

export class UsernameValidators {
  //custom validator methods to construct interface passed to formGroup
  cannotContainSpace(control: AbstractControl) {}
}
