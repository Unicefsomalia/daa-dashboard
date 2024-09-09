import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportFilterComponent } from './report-filter.component';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../shared.module';


@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    SharedModule
  ],
  declarations: [ReportFilterComponent],
  exports: [
    ReportFilterComponent
  ]
})
export class ReportFilterModule { }
