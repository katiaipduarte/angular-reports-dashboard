import { Component, OnInit } from '@angular/core';
import { Button } from '@button';
import { DropdownItem, DropdownOptions } from '@dropdown';
import { EmptyMessage } from '@empty-layout';
import { GatewayItem, ProjectItem, ReportFilters, ReportGrouped, ReportItem } from 'app/reports/models';
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
  public reports: ReportGrouped[] = [];
  public totalAmount: number = 0;
  public selectedProjectName: string = 'All projects';
  public selectedGatewayName: string = 'All gateways';
  public showGateway: boolean = false;
  public columns: string[] = [];
  public showAccordionHeader: boolean = true;

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
          this.prepareTableHeader();
          this.showAccordionHeader = this.reportFilters.projectId !== '' && this.reportFilters.gatewayId !== '';
          this.totalAmount = res.reduce((a: number, b: ReportItem) => a + b.amount, 0);

          if (this.reportFilters.projectId !== '' && this.reportFilters.gatewayId === '') {
            this.prepareTableDataPerGateway(res);
          } else {
            this.prepareTableDataPerProject(res);
          }
        }),
        catchError(() => {
          return of(EMPTY);
        }),
      )
      .subscribe();
  }

  public updateProjectId(item: DropdownItem): void {
    this.reportFilters = { ...this.reportFilters, projectId: item.itemId === '0' ? '' : item.itemId };
    this.selectedProjectName = item.itemText;
  }

  public updateGatewayId(item: DropdownItem): void {
    this.reportFilters = { ...this.reportFilters, gatewayId: item.itemId === '0' ? '' : item.itemId };
    this.selectedGatewayName = item.itemText;
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

  private prepareTableHeader(): void {
    if (this.reportFilters.projectId === '' && this.reportFilters.gatewayId === '') {
      this.columns = ['date', 'gatewayName', 'paymentId', 'amount'];
      this.showGateway = true;
    } else {
      this.columns = ['date', 'paymentId', 'amount'];
      this.showGateway = false;
    }
  }

  private prepareTableDataPerProject(result: ReportItem[]): void {
    let reduced: ReportItem[][] = result.reduce((r, acc) => {
      r[acc.projectId] = r[acc.projectId] || [];
      r[acc.projectId].push({
        ...acc,
        gatewayName: this.gateways.find((i) => i.gatewayId === acc.gatewayId)?.name,
      });

      return r;
    }, Object.create(null));

    this.reports = Object.values(reduced).map((reports: ReportItem[]) => {
      return {
        reportName: this.projects.find((i) => i.projectId === reports[0].projectId)?.name ?? '',
        data: reports,
        total: reports.reduce((a: number, b: ReportItem) => a + b.amount, 0),
      };
    });
  }

  private prepareTableDataPerGateway(result: ReportItem[]): void {
    let reduced: ReportItem[][] = result.reduce((r, acc) => {
      r[acc.gatewayId] = r[acc.gatewayId] || [];
      r[acc.gatewayId].push({
        ...acc,
      });

      return r;
    }, Object.create(null));

    this.reports = Object.values(reduced).map((reports: ReportItem[]) => {
      return {
        reportName: this.gateways.find((i) => i.gatewayId === reports[0].gatewayId)?.name ?? '',
        data: reports,
        total: reports.reduce((a: number, b: ReportItem) => a + b.amount, 0),
      };
    });
  }
}
