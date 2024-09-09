import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLocaleMyformComponent } from './locale/add-locale-myform/add-locale-myform.component';
import { ListLocaleMyTablesComponent } from './locale/list-locale-mytables/list-locale-mytables.component';
import { AddLocaletextMyformComponent } from './locale/view-locale-mytables/add-localetext-myform/add-localetext-myform.component';
import { ViewLocaleMyTablesComponent } from './locale/view-locale-mytables/view-locale-mytables.component';

// Copy to app.routing
`
{
  path:"locales",
  loadChildren:()=>import('./locale/locale.module').then(m=>m.LocalesModule)
}
`

const routes: Routes = [
    {
        path: '',
        component: ListLocaleMyTablesComponent
    },
    {
        path: 'add-locale',
        component: AddLocaleMyformComponent
    },

    {
        path: 'view-locale/:id',
        component: ViewLocaleMyTablesComponent
    },
    {
        path: 'update-locale-text',
        component: AddLocaletextMyformComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LocalizationRoutingModule { }
