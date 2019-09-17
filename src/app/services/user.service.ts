import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/User';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient, private baseService: BaseService) {}

  url = this.baseService.getRESTUrl();

  getGroupStudents(groupId: number): Observable<User[]> {
    const url = `${this.url}/api/groups/${groupId}/users/`;
    return this.http
      .get<User[]>(url)
      .pipe(
        tap(
          _ =>
            this.baseService.log(
              `recieved ustudents of group with id ${groupId}`
            ),
          catchError(
            this.baseService.handleError<User[]>('getGroupStudents', [])
          )
        )
      );
  }
}
