import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PagedResult } from '../models/paged-result';

export abstract class BaseService<T> {

  constructor(
    protected http: HttpClient,
    protected endpoint: string
  ) { }

  getById<T>(id: number): Observable<T> {
    return this.http.get<T>(`${this.endpoint}/${id}`);
  }

  getPaged(page: number, size: number): Observable<PagedResult<T>> {
    return this.http.get<PagedResult<T>>(
      `${this.endpoint}/paged?page=${page}&size=${size}`
    );
  }

  create(command: any): Observable<T> {
    return this.http.post<T>(this.endpoint, command);
  }

  update(id: number, command: any): Observable<void> {
    return this.http.put<void>(`${this.endpoint}/${id}`, command);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.endpoint}/${id}`);
  }
}