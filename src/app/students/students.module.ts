import { NgModule } from '@angular/core';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentFormComponent } from './student-form/student-form.component';
import {CommonModule} from "@angular/common";
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [
    StudentListComponent,
    StudentFormComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
  ],
})
export class StudentsModule { }
