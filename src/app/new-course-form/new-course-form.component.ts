import {
  FormArray,
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css'],
})
export class NewCourseFormComponent {
  // form = new FormGroup({
  //   name: new FormControl({
  //     contact: new FormGroup({
  //       email: new FormControl(),
  //       phone: new FormControl(),
  //     }),
  //   }),
  //   topics: new FormArray([]),
  // });
  // ALTERNATIVELY USE FORM BUILDER
  form;
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: ['', Validators.required],
      contact: fb.group({
        email: [],
        phone: [],
      }),
      topics: fb.array([]),
    });
  }

  addTopic(topic: HTMLInputElement) {
    this.topics.push(new FormControl(topic.value));
    topic.value = '';
  }

  get topics() {
    return this.form.get('topics') as FormArray;
  }

  removeTopic(topic: FormControl) {
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }
}
