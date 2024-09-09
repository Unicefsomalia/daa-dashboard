import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { filterOptions } from './options';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent implements OnInit {
  /// MyTable
  url = 'api/v1/attendances/stats/id'

  // Myform
  formItems: any = filterOptions
  stats_count = 0
  args = {}
  enableOrderBy = true
  headersOrder = ["full_name", "school_name", "state_name", "region_name", "district_name", "village_name", "class", "admission_number", "leaners_gender", "date_of_birth"]
  formGroupOrder = [
    ['grouping', 'paginator'],
    ['school', 'base_class', 'gender'],
    ['school_state', 'school_region', 'school_district', 'school_village'],
    ['leaner_status', 'status', 'special_needs', 'stream'],
    ['start_date', 'end_date']
  ]
  fetchingData = false
  hideFilters = false
  constructor(private route: Router) { }

  ngOnInit() {
  }

  downloadsActions(event) {
  }

  onLengthLoaded(res) {
    this.stats_count = res
  }

  exportTriggerd(event) {
    this.route.navigate(['/reports/downloads']);
  }

  get exportButtonActive() {
    return !this.fetchingData && this.stats_count > 0
  }

  isLoading(status) {
    this.fetchingData = status
  }

  handleActions(event) {
  }

  onValidatedData(data) {
    let ignoreFiltersForDecription = ["report_type", "grouping", "paginator"]
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
    this.url = `api/v1/attendances/stats/${data.grouping}`
    this.args = parsedFilters
    // console.log(parsedFilters)
    // console.log(this.url)
  }

}