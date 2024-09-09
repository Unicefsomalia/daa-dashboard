import { Routes } from '@angular/router';
import { ViewSchoolsComponent } from './view-schools/view-schools.component';
import { SchoolAttendanceComponent } from './school-attendance/school-attendance.component';
import { AddSchoolMyformComponent } from './add-school-myform/add-school-myform.component';

export const SchoolRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'add-school',
        component: AddSchoolMyformComponent
      },
      {
        path: 'view-schools',
        component: ViewSchoolsComponent
      },
      {
        path: 'schools-attendance',
        component: SchoolAttendanceComponent
      }
    ]
  },
];
