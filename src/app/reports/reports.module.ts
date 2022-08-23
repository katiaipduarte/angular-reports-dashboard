import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsLayoutComponent } from './components/reports-layout/reports-layout.component';

@NgModule({
  declarations: [
    ReportsLayoutComponent
  ],
  imports: [CommonModule, ReportsRoutingModule],
})
export class ReportsModule {}
