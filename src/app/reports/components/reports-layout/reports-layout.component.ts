import { Component, OnInit } from '@angular/core';
import { Button } from '@button';
import { DropdownOptions } from '@dropdown';
import { EmptyMessage } from '@empty-layout';
import { GatewayItem, ProjectItem, ReportFilters, ReportItem } from 'app/reports/models';
import { catchError, EMPTY, of, tap, zip } from 'rxjs';
import { ReportsService } from './../../services/reports.service';

@Component({
  selector: 'app-reports-layout',
  templateUrl: './reports-layout.component.html',
  styleUrls: ['./reports-layout.component.scss'],
})
export class ReportsLayoutComponent implements OnInit {
  public emptyUI: EmptyMessage = {
    title: 'No reports',
    content:
      'Currently you have no data for the reports to be generated. Once you start generating traffic through the Balance application the reports will be shown.',
    img: 'empty',
  };
  public generateReport: Button = {
    textLabel: 'Generate report',
    ariaLabel: 'Click to generate report',
    testAttr: 'generate-report-btn',
  };
  public projectDropdown: DropdownOptions = {
    items: [
      {
        itemText: 'All projects',
        itemId: '0',
      },
    ],
    selectedItemId: '0',
    testAttr: 'project-dropdown',
  };
  public gatewayDropdown: DropdownOptions = {
    items: [
      {
        itemText: 'All gateways',
        itemId: '0',
      },
    ],
    selectedItemId: '0',
    testAttr: 'gateway-dropdown',
  };

  private projects: ProjectItem[] = [];
  private gateways: GatewayItem[] = [];
  private reportFilters: ReportFilters = { from: '2021-01-01', to: '2021-12-31', projectId: '', gatewayId: '' };

  constructor(private reportsService: ReportsService) {}

  public ngOnInit(): void {
    this.getFilters();
    this.getReports();
  }

  public getReports(): void {
    this.reportsService
      .getReports(this.reportFilters)
      .pipe(
        tap((res: ReportItem[]) => {
          console.log(res);
        }),
        catchError(() => {
          return of(EMPTY);
        }),
      )
      .subscribe();
  }

  public updateProjectId(projectId: string): void {
    this.reportFilters = { ...this.reportFilters, projectId: projectId === '0' ? '' : projectId };
  }

  public updateGatewayId(gatewayId: string): void {
    this.reportFilters = { ...this.reportFilters, gatewayId: gatewayId === '0' ? '' : gatewayId };
  }

  private getFilters(): void {
    zip(this.reportsService.getProjects(), this.reportsService.getGateways())
      .pipe(
        tap((res: [ProjectItem[], GatewayItem[]]) => {
          this.projects = res[0];
          this.gateways = res[1];

          this.prepareProjectFilter();
          this.prepareGatewayFilter();
        }),
        catchError(() => {
          return of(EMPTY);
        }),
      )
      .subscribe();
  }

  private prepareProjectFilter(): void {
    this.projects.forEach((i: ProjectItem) =>
      this.projectDropdown.items.push({
        itemId: i.projectId.toString(),
        itemText: i.name,
      }),
    );
  }

  private prepareGatewayFilter(): void {
    this.gateways.forEach((i: GatewayItem) =>
      this.gatewayDropdown.items.push({
        itemId: i.gatewayId.toString(),
        itemText: i.name,
      }),
    );
  }
}
