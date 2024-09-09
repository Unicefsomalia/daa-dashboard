import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FileUploadModule } from 'ng2-file-upload';
import { StudentsComponent } from './students.component';
import { SharedModule } from '../../shared/shared.module';
import { StudentsRoutes } from './students.routing';
import { DropoutsComponent } from './dropouts/dropouts.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { MatDialogModule } from '@angular/material/dialog';
import { IndividualComponent } from './individual/individual.component';
import { MoveStudentsComponent } from './move-students/move-students.component';
import { PromoteStudentsComponent, PromoteToDialogComponent } from './promote-students/promote-students.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatListModule } from '@angular/material/list';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(StudentsRoutes),
    FileUploadModule,
    SharedModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatListModule,
    MatDialogModule,
  ],
  declarations: [
  ],
  entryComponents: [PromoteToDialogComponent],
})
export class StudentsModule { }
