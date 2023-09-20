import { Injectable } from '@angular/core';
import {BaseCrud} from "./base-crud";
import {HttpClient} from "@angular/common/http";
import {StudentModel} from "../models/student.model";

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService extends BaseCrud<StudentModel>{
  constructor(httpClient: HttpClient) {
    super( 'students', httpClient);
  }
}
