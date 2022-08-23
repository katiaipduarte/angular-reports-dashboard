import { Component, OnInit } from '@angular/core';
import { EmptyMessage } from '@empty-layout';
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

  constructor(private reportsService: ReportsService) {}

  ngOnInit(): void {
    this.getFilters();
  }

  private getFilters(): void {
    // zip().pipe();
  }
}
