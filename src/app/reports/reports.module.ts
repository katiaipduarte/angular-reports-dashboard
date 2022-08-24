import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CustomMaterialModule } from '@custom-material/custom-material.module';
import { SharedModule } from 'app/shared/shared.module';

import { ReportsLayoutComponent } from './components/reports-layout/reports-layout.component';
import { ReportsRoutingModule } from './reports-routing.module';

@NgModule({
  declarations: [ReportsLayoutComponent],
  imports: [CommonModule, ReportsRoutingModule, HttpClientModule, CustomMaterialModule, SharedModule],
})
export class ReportsModule {}
