import { NgModule } from '@angular/core';
import { LocalizationComponent } from './localization.component';
import { LocalizationRoutingModule } from './localization-routing.module';
import { MyformModule } from '@sisitech/myform';
import { TablesModule, TablesService } from '@sisitech/tables';
import { AddLocaleMyformComponent } from './locale/add-locale-myform/add-locale-myform.component';
import { ListLocaleMyTablesComponent } from './locale/list-locale-mytables/list-locale-mytables.component';
import { ViewLocaleMyTablesComponent } from './locale/view-locale-mytables/view-locale-mytables.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AddLocaletextMyformComponent } from './locale/view-locale-mytables/add-localetext-myform/add-localetext-myform.component';
import { environment } from 'src/environments/environment';
import { AuthInterceptor } from 'src/app/interceptors/auth.interceptor';

const authConfig = {
  APIEndpoint: environment.APIEndpointNoSlash,
  version: "api/v1",
  clientId: environment.APIClientID,
}

@NgModule({
  declarations: [
    AddLocaletextMyformComponent,
    AddLocaleMyformComponent,
    ListLocaleMyTablesComponent,
    ViewLocaleMyTablesComponent,
  ],
  imports: [
    FormsModule,

    LocalizationRoutingModule,
    MyformModule.forChild(authConfig),
    TablesModule.forChild(authConfig),
  ],
  exports: [
  ],
  providers: [
    TablesService, {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }]
})
export class LocalizationModule { }
