import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewPartnersComponent } from './view-partners.component';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [ViewPartnersComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ViewPartnersModule { }
