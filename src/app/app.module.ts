import { SignupFormComponent } from '../signup-form/signup-form.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';

@NgModule({
  declarations: [AppComponent, SignupFormComponent, NewCourseFormComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
