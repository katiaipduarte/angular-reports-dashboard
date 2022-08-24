import { Component, Input, ViewEncapsulation } from '@angular/core';
import { ReportItem } from 'app/reports/models';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TableComponent {
  @Input() columns: string[] = [];
  @Input() datasource: ReportItem[] = [];
  @Input() showGateway = false;
}
