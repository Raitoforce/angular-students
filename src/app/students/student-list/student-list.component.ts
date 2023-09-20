import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {StudentServiceService} from "../../services/student.service.service";

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent {
  headers = ['Name', 'Last Name', 'Email', 'Actions'];
  student$: Observable<any[]>;

  constructor(private service: StudentServiceService) {
    this.student$ = this.service.readAll();
  }

  protected readonly length = length;
}
