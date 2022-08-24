import { ReportItem } from 'app/reports/models';
export interface ReportGrouped {
  reportName: string;
  data: ReportItem[];
  total: number;
}
