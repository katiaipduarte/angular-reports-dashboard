import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize, Observable } from 'rxjs';
import { LoaderService } from '../services/loader.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  public totalRequests = 0;
  public requestsCompleted = 0;

  constructor(private loaderService: LoaderService) {}

  public intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (!req.url.includes('/assets')) {
      this.loaderService.show();
      this.totalRequests++;
    }

    return next.handle(req).pipe(
      finalize(() => {
        if (!req.url.includes('/assets')) {
          this.requestsCompleted++;
          if (this.requestsCompleted === this.totalRequests) {
            this.totalRequests = 0;
            this.requestsCompleted = 0;
            this.loaderService.hide();
          }
        }
      }),
    );
  }
}
