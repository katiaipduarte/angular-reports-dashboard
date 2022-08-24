import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalErrorHandlerService } from '@core/services/global-error-handler/global-error-handler.service';
import { map, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { GatewayItem, Gateways, ProjectItem, Projects, ReportFilters, ReportItem, Reports } from '../models';

@Injectable({
  providedIn: 'root',
})
export class ReportsService {
  constructor(private httpClient: HttpClient, private errorService: GlobalErrorHandlerService) {}

  public getProjects(): Observable<ProjectItem[]> {
    return this.httpClient.get<Projects>('projects').pipe(
      map((res: Projects) => res.data),
      catchError((err) => this.errorService.handleError(err)),
    );
  }

  public getGateways(): Observable<GatewayItem[]> {
    return this.httpClient.get<Gateways>('gateways').pipe(
      map((res: Gateways) => res.data),
      catchError((err) => this.errorService.handleError(err)),
    );
  }

  public getReports(filters: ReportFilters): Observable<ReportItem[]> {
    return this.httpClient.post<Reports>('report', filters).pipe(
      map((res: Reports) => res.data),
      catchError((err: HttpErrorResponse) => this.errorService.handleError(err)),
    );
  }
}
