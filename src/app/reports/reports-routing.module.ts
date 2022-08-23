import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '@core/layout/layout.component';
import { ReportsLayoutComponent } from './components/reports-layout/reports-layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivateChild: [],
    children: [{ path: '', component: ReportsLayoutComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportsRoutingModule {}
