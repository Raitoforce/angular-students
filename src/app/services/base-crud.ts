import {BaseCrudInterface} from "./base-crud.interface";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

export class BaseCrud<T> implements BaseCrudInterface<T>{

  constructor(protected urlBase: string, protected httpClient: HttpClient ) {
    this.urlBase = `${environment.apiUrl}${urlBase}`;
  }
  create(item: T): Observable<T> {
    return this.httpClient.post<T>(this.urlBase, item);
  }

  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(this.urlBase);
  }

  read(id: number): Observable<T> {
    return this.httpClient.get<T>(`${this.urlBase}/${id}`);
  }

  readAll(): Observable<T[]> {
    return this.httpClient.get<T[]>(this.urlBase);
  }

  update(item: T): Observable<T> {
    return this.httpClient.put<T>(this.urlBase, item);
  }

}
