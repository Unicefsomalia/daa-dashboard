import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutes } from './dashboard.routing';
import { MatCardModule } from '@angular/material/card';
import { DashboardV2Component } from '../dashboard-v2/dashboard-v2.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardBuilderModule } from '@sisitech/dashboard-builder';
import { environment } from 'src/environments/environment';
import { ChartModule } from '@sisitech/charts';
const authConfig = {
  APIEndpoint: environment.APIEndpointNoSlash,
  version: "api/v1",
  clientId: environment.APIClientID,
}

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MatCardModule,
    DashboardBuilderModule,
    ChartModule,
    RouterModule.forChild(DashboardRoutes)
  ],
  declarations: [DashboardComponent, DashboardV2Component],
  providers: [
    { provide: 'config', useValue: authConfig || {} }
  ],

})
export class DashboardModule { }
