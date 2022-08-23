import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@core/models/user.interface';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { GlobalErrorHandlerService } from './../global-error-handler/global-error-handler.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient, private globalErrorHandlerService: GlobalErrorHandlerService) {}

  public getCurrentUser(): Observable<User> {
    return this.httpClient.get<User>('users').pipe(catchError((err) => this.globalErrorHandlerService.handleError(err)));
  }
}
