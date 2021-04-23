import { UsernameValidators } from '../common/validators/username.validators';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css'],
})
export class SignupFormComponent {
  // abstract control acts as base control for formControl and formGroup

  // all properties that are common between these two classes
  // will be stored in the abstract control!

  // this is how to explicitly create form objects
  // assign validators when creating form control objects
  form = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      UsernameValidators.cannotContainSpace,
      UsernameValidators.shouldBeUnique,
    ]),
    password: new FormControl('', Validators.required),
  });
  // define property to give us access to username form control object
  // get 'getter' internal method
  get username() {
    return this.form.get('username');
  }
}
