import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { EChartsOption } from 'echarts';
import { DonutChartData } from '../models';

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DonutChartComponent implements OnChanges {
  @Input() chartData: DonutChartData | undefined;
  @Input() title: string = '';
  @Input() amount: number = 0;

  public chartOption!: EChartsOption;

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['chartData'] && changes['chartData'].currentValue) {
      this.drawChart();
    }
  }

  private drawChart(): void {
    this.chartOption = {
      tooltip: {
        trigger: 'axis',
        showContent: true,
      },
      toolbox: {
        show: false,
      },
      legend: {
        show: false,
      },
      color: this.chartData?.color,
      series: [
        {
          name: this.title,
          data: this.chartData?.series,
          type: 'pie',
          emphasis: {
            focus: 'self',
          },
          label: {
            formatter: '{b}: ({d}%)',
          },
          radius: ['40%', '70%'],
          animationDelay: (idx) => idx * 10,
          lineStyle: {
            width: 3,
            type: 'solid',
          },
        },
      ],
      animationEasing: 'elasticOut',
      animationDelayUpdate: (idx) => idx * 10,
    } as EChartsOption;
  }
}
