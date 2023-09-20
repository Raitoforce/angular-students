import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StudentListComponent} from "./students/student-list/student-list.component";
import {StudentFormComponent} from "./students/student-form/student-form.component";

const routes: Routes = [
  { path: 'list', component: StudentListComponent },
  { path: 'form', component: StudentFormComponent },
  { path: 'form/:id', component: StudentFormComponent },
  { path: '**', redirectTo: 'list' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
