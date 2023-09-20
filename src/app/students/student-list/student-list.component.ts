import {Component, OnInit} from '@angular/core';
import {Observable, take} from "rxjs";
import {StudentServiceService} from "../../services/student.service.service";
import {StudentModel} from "../../models/student.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit{
  headers = ['Name', 'Last Name', 'Email'];
  student$!: Observable<StudentModel[]>;

  constructor(private service: StudentServiceService, private router: Router) {
  }

  ngOnInit() {
    this.student$ = this.service.readAll();
  }

  deleteStudent({id}: {id:number}){
    this.service.delete(id).pipe(take(1)).subscribe(
      () => this.ngOnInit()
    );
  }

  editStudent(student: StudentModel) {
    this.router.navigate(['form', student.id]).then();
  }
}
