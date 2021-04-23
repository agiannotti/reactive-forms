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

  // async validator implementation
  static shouldBeUnique(
    control: AbstractControl
  ): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'tony') resolve({ shouldBeUnique: true });
        // use else instead of return here, because we want to continue within the function
        else resolve(null);
      }, 2000);
    });
  }
}
