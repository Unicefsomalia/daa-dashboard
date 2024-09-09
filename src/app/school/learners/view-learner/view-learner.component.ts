import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { filterOptions } from './options';

@Component({
  selector: 'app-view-learner',
  templateUrl: './view-learner.component.html',
  styleUrls: ['./view-learner.component.scss']
})
export class ViewLearnerComponent implements OnInit {

  /// MyTable
  url = "api/v1/students/stats/id"
  enableOrderBy = true
  collapseFilters = false
  headers = [
    "full_name",
    "school_name",
    { name: "Gender L", source: "leaners_gender" },
    "class",
    "admission_number",
    { name: "Status", source: "leaners_status" },
    "date_enrolled",
    { name: "Date Birth", source: "date_of_birth" },
    { name: "Guardian Name", source: "current_guardian_name" },
    { name: "Guardian Phone", source: "current_guardian_phone" },
    // { name: "Special Needs", source: "special_needs_details" },
    "district_name",
    "region_name",
    "village_name",
    "distance_from_school",
    "live_with_parent"
  ]
  formItems: any = filterOptions
  stats_count = 0
  args = {}
  formGroupOrder = [
    ['school', 'gender', 'paginator'],
    ['school_region', 'school_district', 'school_village'],
    ['special_needs', 'base_class', 'status']
  ]
  fetchingData = false
  constructor(private route: Router) { }

  ngOnInit() {
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

  async handleActions(action) {
    if (action.name == "Edit") {
      const data = action.data;
      // console.log(data);
      data.stream = { id: data.stream, name: `${data.school_name} - ${data.class_name}` }
      try {
        data.special_needs = data.special_needs_details.map((ele) => {
          return { id: ele.id, name: ele.name }
        })
      } catch (error) {
        // console.error(error)
        data.special_needs = []
      }
      // console.log(data);
      await this.route.navigate(['../students/add-student'], { state: data });
    }
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
    // this.url = `api/v1/students`
    this.args = parsedFilters
    // console.log(parsedFilters)
    // console.log(this.url)
  }

}
