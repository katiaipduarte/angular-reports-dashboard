import { DonutChartDataPoints } from './donut-chart-data-points.interface';

export interface DonutChart {
  tooltip: {
    trigger: string;
    showContent: boolean;
  };
  toolbox: {
    show: boolean;
  };
  legend: {
    show: boolean;
  };
  color: string[];
  series: [
    {
      name: string;
      data: DonutChartDataPoints[];
      type: string;
      emphasis: {
        focus: string;
      };
      label: {
        formatter: string;
      };
      radius: string[];
      animationDelay: (idx: number) => number;
      lineStyle: {
        width: number;
        type: string;
      };
    },
  ];
  animationEasing: string;
  animationDelayUpdate: (idx: number) => number;
}
