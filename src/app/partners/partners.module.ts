import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartnersComponent } from './partners.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [PartnersComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
})
export class PartnersModule { }
