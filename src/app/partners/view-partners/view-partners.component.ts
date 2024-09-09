import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-partners',
  templateUrl: './view-partners.component.html',
  styleUrls: ['./view-partners.component.scss']
})
export class ViewPartnersComponent implements OnInit {

  url = 'api/v1/schools/stats/partner'
  args = {}

  headers = [
    'name',
    'email',
    'total_schools'
  ]

  constructor() { }

  ngOnInit(): void {
  }


  handleActions(event) {
  }

  onLengthLoaded(res) {
  }

  isLoading(status) {
  }

  exportTriggerd(event) {
  }


}
