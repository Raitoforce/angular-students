import {Observable} from "rxjs";

export interface BaseCrudInterface<T> {
  readAll(): Observable<T[]>
  create(item: T): Observable<T>;
  read(id: number): Observable<T>;
  update(item: T): Observable<T>;
  delete(id: number): Observable<void>;
}
