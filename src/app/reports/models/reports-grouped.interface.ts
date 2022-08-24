import { ReportItem } from 'app/reports/models';
export interface ReportGrouped {
  projectName: string;
  data: ReportItem[];
  total: number;
}
