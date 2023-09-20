import { Injectable } from '@angular/core';
import {BaseCrud} from "./base-crud";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService extends BaseCrud<any>{
  constructor(httpClient: HttpClient) {
    super( 'students', httpClient);
  }
}
