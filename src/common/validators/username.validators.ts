import { AbstractControl, ValidationErrors } from '@angular/forms';
// UsernameValidators.cannotContainSpace

// to make this validator method available, define method as static
export class UsernameValidators {
  //custom validator methods to construct interface passed to formGroup
  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(' ') >= 0)
      return { cannotContainSpace: true };

    return null;
  }

  static shouldBeUnique(control: AbstractControl): ValidationErrors | null {
    setTimeout(() => {
      if (control.value === 'tony') return { shouldBeUnique: true };
      return null;
    }, 2000);

    return null;
  }
}
