import {BaseCrudInterface} from "./base-crud.interface";
import {catchError, EMPTY, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

export class BaseCrud<T> implements BaseCrudInterface<T>{

  constructor(protected urlBase: string, protected httpClient: HttpClient ) {
    this.urlBase = `${environment.apiUrl}${urlBase}`;
  }
  create(item: T): Observable<T> {
    return this.httpClient.post<T>(this.urlBase, item).pipe(
      catchError(() => {
        alert('error when creating');
        return EMPTY;
      })
    );
  }

  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.urlBase}/${id}`).pipe(
      catchError(() => {
        alert('error when deleting');
        return EMPTY;
      })
    );
  }

  read(id: number): Observable<T> {
    return this.httpClient.get<T>(`${this.urlBase}/${id}`).pipe(
      catchError(() => {
        alert('error when reading');
        return EMPTY;
      })
    );
  }

  readAll(): Observable<T[]> {
    return this.httpClient.get<T[]>(this.urlBase).pipe(
      catchError(() => {
        alert('error when read all items');
        return EMPTY;
      })
    );
  }

  update(item: T): Observable<T> {
    return this.httpClient.put<T>(this.urlBase, item).pipe(
      catchError(() => {
        alert('error when creating');
        return EMPTY;
      })
    );
  }

}
