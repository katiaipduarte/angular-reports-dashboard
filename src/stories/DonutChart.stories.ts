import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterialModule } from '@custom-material/custom-material.module';
import { DonutChartComponent } from '@donut-chart';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { NgxEchartsModule } from 'ngx-echarts';

export default {
  title: 'Donut Chart',
  component: DonutChartComponent,
  decorators: [
    (storyFunc) => {
      const story = storyFunc();

      return {
        ...story,
        template: `${story.template}`,
      };
    },
    moduleMetadata({
      declarations: [DonutChartComponent],
      imports: [
        HttpClientModule,
        MatIconModule,
        CustomMaterialModule,
        BrowserAnimationsModule,
        NgxEchartsModule.forRoot({
          echarts: () => import('echarts'),
        }),
      ],
    }),
  ],
} as Meta;

const Template: Story<DonutChartComponent> = (args: DonutChartComponent) => ({
  component: DonutChartComponent,
  props: args,
  template: `<app-donut-chart
              [chartData]="chartData">
            </app-donut-chart>
`,
});

export const Default = Template.bind({});
Default.args = {
  chartData: {
    series: [],
    color: ['#00b1c2', '#ffc662', '#e46e29', '#61748b'],
  },
  title: 'test title',
  amount: 0,
};
