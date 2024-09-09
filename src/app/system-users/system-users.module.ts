import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { SystemUsersComponent } from './system-users.component';



@NgModule({
  declarations: [SystemUsersComponent],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class SystemUsersModule { }
