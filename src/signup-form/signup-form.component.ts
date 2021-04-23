import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

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
  form = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
  });
}
