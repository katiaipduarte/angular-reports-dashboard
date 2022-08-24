import { AccordionComponent } from '@accordion';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '@button';
import { CustomMaterialModule } from '@custom-material/custom-material.module';
import { DatepickerComponent } from '@datepicker';
import { DonutChartComponent } from '@donut-chart';
import { DropdownComponent } from '@dropdown';
import { EmptyLayoutComponent } from '@empty-layout';
import { LoaderComponent } from '@loader';
import { ToastComponent } from '@message';
import { InitialsPipe } from '@pipes';
import { TableComponent } from '@table';
import { NgxEchartsModule } from 'ngx-echarts';

const modules = [
  ButtonComponent,
  DatepickerComponent,
  DonutChartComponent,
  DropdownComponent,
  EmptyLayoutComponent,
  LoaderComponent,
  TableComponent,
  ToastComponent,
  AccordionComponent,
];

const pipes = [InitialsPipe];

@NgModule({
  declarations: [...modules, ...pipes],
  exports: [...modules, ...pipes],
  imports: [
    CommonModule,
    RouterModule,
    CustomMaterialModule,
    HttpClientModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
  ],
})
export class SharedModule {}
