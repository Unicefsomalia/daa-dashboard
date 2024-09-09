import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { NotAdminGuard, AdminGuard } from '../core/guards/auth.guard';
import { DashboardV2Component } from '../dashboard-v2/dashboard-v2.component';

export const DashboardRoutes: Routes = [
  {
    path: '',
    component: DashboardV2Component
  },
  {
    path: '',
    children: [
      {
        path: 'schools',
        loadChildren: () => import('../school/school.module').then(m => m.SchoolModule),
        // canActivate: [AdminGuard]
      },
      {
        path: 'students',
        loadChildren: () => import('../school/learners/learners.module').then(m => m.LearnersModule)
      },
      {
        path: 'teachers',
        loadChildren: () => import('../school/teachers/teachers.module').then(m => m.TeachersModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('../settings/settings.module').then(m => m.SettingsModule)
      },
      {
        path: 'classes',
        loadChildren: () => import('../school/classes/classes.module').then(m => m.ClassesModule),
        // canActivate: [NotAdminGuard]
      },
      {
        path: 'reports',
        loadChildren: () => import('../reports/reports.module').then(m => m.ReportsModule)
      },
      {
        path: 'locales',
        loadChildren: () => import('../localization/localization.module').then(m => m.LocalizationModule)
      },
      {
        path: 'imports',
        loadChildren: () => import('../imports/imports.module').then(m => m.ImportsModule)
      },
      {
        path: 'partners',
        loadChildren: () => import('../partners/view-partners/view-partners.module').then(m => m.ViewPartnersModule)
      },
      {
        path: 'add-partners',
        loadChildren: () => import('../partners/partners.module').then(m => m.PartnersModule)
      },
      {
        path: 'view-partners',
        loadChildren: () => import('../partners/view-partners/view-partners.module').then(m => m.ViewPartnersModule)
      },
      {
        path: 'view-users',
        loadChildren: () => import('../system-users/system-users.module').then(m => m.SystemUsersModule)
      },
    ]
  }
];

