import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentFormComponent } from './student-form/student-form.component';



@NgModule({
  declarations: [
    StudentListComponent,
    StudentFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class StudentsModule { }
