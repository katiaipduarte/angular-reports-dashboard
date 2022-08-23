import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable, isDevMode } from '@angular/core';
import { MessageType, ToastService } from '@message';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GlobalErrorHandlerService implements ErrorHandler {
  constructor(private httpClient: HttpClient, private toastService: ToastService) {}

  // TODO: Create a service/method to send the error message to Logs in production env
  public handleError(err: HttpErrorResponse): Observable<never> {
    if (isDevMode()) {
      console.error(err);
    }

    const message = this.getServerErrorMessage(err);

    this.toastService.openSnackBar({
      title: message,
      message: '',
      type: MessageType.Error,
    });

    return throwError(() => message);
  }

  private getServerErrorMessage(error: HttpErrorResponse): string {
    switch (error.status) {
      case 404: {
        return `Not Found: ${error.message}`;
      }
      case 403: {
        return `Access Denied: ${error.message}`;
      }
      case 500: {
        return `Internal Server Error: ${error.message}`;
      }
      default: {
        return `Unknown Server Error: ${error.message}`;
      }
    }
  }
}
