import { DonutChartDataPoints } from './donut-chart-data-points.interface';

export interface DonutChartData {
  series: DonutChartDataPoints[];
  color: string[];
}
