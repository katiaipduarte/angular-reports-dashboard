import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthInterceptor implements HttpInterceptor {
  public intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<Object>> {
    if (req.url.includes('/assets')) {
      const baseUrl = document.baseURI;
      const asset = req.url.split('/assets/');

      req = req.clone({
        url: `${baseUrl}assets/${asset[1]}`,
      });
    } else {
      req = req.clone({
        url: `${environment.api}/${req.url}`,
      });
    }

    return next.handle(req);
  }
}
