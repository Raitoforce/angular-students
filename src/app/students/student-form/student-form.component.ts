import {Component, OnInit} from '@angular/core';
import {StudentServiceService} from "../../services/student.service.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {StudentModel} from "../../models/student.model";
import {take} from "rxjs";

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit{
  buttonAction = "Save";

  formGroup!: FormGroup;

  id!: number

  constructor(private service: StudentServiceService, private activatedRoute: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {

    this.formGroup = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      lastName: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
    });

    this.id = Number(this.activatedRoute.snapshot.params['id'])
    this.buttonAction = isNaN(this.id) ? "Save" : "update"

    if (!isNaN(this.id)) {
      this.service.read(this.id).pipe(take(1)).subscribe(
        student => {
          this.formGroup.addControl('id', new FormControl())
          this.formGroup.patchValue(student)
        }
      )
    }
  }


  submit() {
    const studentValue = ({...this.formGroup.value} as unknown) as StudentModel;
    const $action = this.id ? this.service.update(studentValue) : this.service.create(studentValue)

    $action.pipe(take(1)).subscribe(
      () => this.router.navigate(['list'])
    )
  }
}
