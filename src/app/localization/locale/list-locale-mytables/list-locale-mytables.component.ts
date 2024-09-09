import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalizationComponent } from '../../localization.component';
import { filterOptions } from './filterOptions'
@Component({
  selector: 'app-list-locale',
  templateUrl: './list-locale-mytables.component.html',
  styleUrls: ['./list-locale-mytables.component.scss']
})
export class ListLocaleMyTablesComponent extends LocalizationComponent {

  enableDelete: boolean = true
  enableExport: boolean = true
  enableEdit: boolean = true
  pageSize: number = 10
  isValidationOnly = true

  formFilters: any = {}

  formItems: any = filterOptions

  url?: string = "api/v1/translation-locales"

  stats_count = 0
  args = {}

  collapseFilters = false
  showNumbering = true
  //Required Fieds: name, country_code, language_code
  //Other fields: text_translations_details, translations, active
  formGroupOrder = [
  ]

  // Remmber to pass it to the component
  headers = [
    "name", "country_code", "language_code", "active"
  ]

  constructor(private router: Router, public override route: ActivatedRoute,) {
    super(route)
  }

  override ngOnInit() {
    super.ngOnInit()
  }

  override ngOnDestroy(): void {
    super.ngOnDestroy()
  }
  async handleActions(action: any) {
    const data = action.data;

    if (action.name == "Edit") {
      // id and name are what the multiselect expects for update
      //   data.school = { id: data.school, name: data.school_name }
      console.log(this.routeSegments)
      await this.router.navigate([...this.parentSegments, 'add-locale'], { state: data });
    } else if (action.name.toLowerCase() == "view") {
      await this.router.navigate([...this.parentSegments, 'view-locale', data.id], { state: data });

    }
  }

  exportTriggerd(event: any) {
    this.router.navigate(['../reports/downloads']);
  }

  onValidatedData(data: any) {
    this.formFilters = data
  }
}
