import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TeachersComponent } from './teachers.component';
import { SharedModule } from '../../shared/shared.module';
import { TeachersRoutes } from './teachers.routing';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AddTeacherComponent } from '../add-teacher/add-teacher.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { AddTeacherMyformComponent } from './add-teacher-myform/add-teacher-myform.component';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(TeachersRoutes),
    SharedModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  declarations: [
    TeachersComponent,
    ResetPasswordComponent,
    AddTeacherComponent,
    AddTeacherMyformComponent
  ]
})
export class TeachersModule { }
