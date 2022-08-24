import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { UserItem } from './../../models/user-item.interface';
import { Users } from './../../models/users.interface';
import { GlobalErrorHandlerService } from './../global-error-handler/global-error-handler.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient, private globalErrorHandlerService: GlobalErrorHandlerService) {}

  public getCurrentUser(): Observable<UserItem[]> {
    return this.httpClient.get<Users>('users').pipe(
      map((res: Users) => res.data),
      catchError((err) => this.globalErrorHandlerService.handleError(err)),
    );
  }
}
