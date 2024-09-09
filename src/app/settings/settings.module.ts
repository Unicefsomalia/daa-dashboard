import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { SettingsRoutes } from './settings.routing';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ProfileComponent, EditProfileDialogComponent } from './profile/profile.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { MatDatepickerModule, } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        FlexLayoutModule,
        PerfectScrollbarModule,
        MatDialogModule,
        MatDatepickerModule,
        MatNativeDateModule,
        RouterModule.forChild(SettingsRoutes),
    ],
    declarations: [ChangePasswordComponent, ProfileComponent, EditProfileDialogComponent]
})
export class SettingsModule { }

