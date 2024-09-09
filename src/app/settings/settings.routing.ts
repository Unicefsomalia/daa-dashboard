import { Routes } from '@angular/router';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ProfileComponent } from './profile/profile.component';
import { PartnersComponent } from '../partners/partners.component';
import { ViewPartnersComponent } from '../partners/view-partners/view-partners.component';
import { SystemUsersComponent } from '../system-users/system-users.component';

export const SettingsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'change-password',
        component: ChangePasswordComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'view-partners',
        component: ViewPartnersComponent
      },
      {
        path: 'view-users',
        component: SystemUsersComponent
      },
      {
        path: 'add-partners',
        component: PartnersComponent
      },
    ]
  },

];
