import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { SchoolService } from '../school.service';
import { filterOptions } from './options';

@Component({
  selector: 'app-view-schools',
  templateUrl: './view-schools.component.html',
  styleUrls: ['./view-schools.component.scss']
})
export class ViewSchoolsComponent implements OnInit {

  /// MyTable
  url = 'api/v1/schools/stats/id'

  headers = [
    'name',
    'emis_code',
    'email',
    'region_name',
    'district_name',
    'village_name'
  ]

  // Myform
  formItems: any = filterOptions
  stats_count = 0
  args = {}
  formGroupOrder = [
    ['emis_code'],
    ['state', 'region'],
    ['district', 'village', 'has_partner'],
  ]
  fetchingData = false
  collapseFilters = false


  constructor(private schoolService: SchoolService, private route: Router) { }
  currentPage = 'school';
  schools: any;
  rows = [];
  temp = [];
  total = 0;
  pageNumber = 0;
  searching: any;
  loader: boolean = false;

  ngOnInit() {
    this.getSchoolData(this.pageNumber + 1);
    console.log(this.formItems, 'form items')
  }

  getSchoolData(page) {
    this.loader = true
    this.schoolService.getSchools(page).subscribe(res => {
      res.results.map((school, index) => {
        if (page > 1) {
          school.num = (page * 100) + (index + 1);
        } else {
          school.num = index + 1;
        }
        if (school.village === '' || school.village === null) {
          school.village = 'None';
        }
        return school;
      });
      this.temp = [...res['results']];
      this.rows = res['results'];
      this.total = res.count;
      this.loader = false;
    });
  }

  pageNumberClicked(page) {
    this.getSchoolData(page.offset + 1);
  }
  onLengthLoaded(res) {
    this.stats_count = res
  }

  exportTriggerd(event) {
    this.route.navigate(['../reports/downloads']);
  }

  get exportButtonActive() {
    return !this.fetchingData && this.stats_count > 0
  }

  handleActions(event) {
  }

  isLoading(status) {
    this.fetchingData = status
  }

  onValidatedData(data) {
    let ignoreFiltersForDecription = ["grouping", "paginator"]
    let parsedFilters = {}
    let descriptions = []
    for (let key in data) {
      const filterValue = data[key]
      if (!filterValue) continue
      if (typeof filterValue == "object") {
        if (filterValue.hasOwnProperty("value")) {
          parsedFilters[key] = filterValue.value
        }
        if (filterValue.hasOwnProperty("details")) {
          for (let index in filterValue.details) {
            const description = filterValue.details[index]
            if (description.hasOwnProperty("description")) {
              if (!ignoreFiltersForDecription.includes(key))
                descriptions.push(description.description)
            }
          }
        }
      } else {
        parsedFilters[key] = filterValue
        if (!ignoreFiltersForDecription.includes(key))
          descriptions.push(`${key}*${filterValue}`)
      }
    }
    if (descriptions.length > 0)
      parsedFilters["descriptions"] = descriptions.join("-")
    this.url = `api/v1/schools/stats/id`
    parsedFilters['paginator'] = 'cursor'
    this.args = parsedFilters
    console.log(parsedFilters)
    console.log(this.url)
  }

  searchSchool(name) {
    this.searching = true;
    this.loader = true;
    let page = 1;
    this.schoolService.getSearchedSchool(page, name).subscribe(res => {
      res.results.map((school, index) => {
        if (page > 1) {
          school.num = (page * 100) + (index + 1);
        } else {
          school.num = index + 1;
        }
        if (school.village === '' || school.village === null) {
          school.village = 'None';
        }
        return school;
      });
      this.temp = [...res['results']];
      this.rows = res['results'];
      this.total = res.count;
    });
    this.searching = false;
    this.loader = false;

  }

  defaultValues(name) {
    if (name) {
      this.getSchoolData(this.pageNumber + 1);
    }
  }
}
