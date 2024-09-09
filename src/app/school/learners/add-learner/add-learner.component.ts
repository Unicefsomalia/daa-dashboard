import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConstantsService } from 'src/app/common/services/constants.service';
import { options } from './options';

@Component({
  selector: 'app-add-learner',
  templateUrl: './add-learner.component.html',
  styleUrls: ['./add-learner.component.scss']
})
export class AddLearnerComponent implements OnInit {

  formItems: any = options;
  url: string = "api/v1/students/"
  extra_fields: any
  originalInstance: any
  formGroupOrder = [
    ['first_name', 'middle_name'],
    ['last_name', 'test_name'],

    //parent details
    ['family_nick_name', 'father_phone', 'father_status'],
    ['mother_name', 'mother_phone', 'mother_status'],
    ['live_with_parent'],

    // guardian details
    ['guardian_name', 'guardian_phone', 'guardian_relationship'],
    ['admission_no', 'is_over_age', 'status'],
    ['school', 'stream', 'gender'],
    ['date_of_birth', 'date_enrolled', 'pre_primary_attendend'],
    ['has_special_needs', 'special_needs'],
    ['state', 'region', 'district', 'village'],
    ['street_name', 'house_number'],


  ]
  instance: any

  constructor(private route: ActivatedRoute, private router: Router, public commonService: ConstantsService) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        const instance = this.router.getCurrentNavigation().extras.state;
        if (instance.hasOwnProperty("id")) {
          this.instance = instance
        }
      }
    })
  }


  ngOnInit() {
  }

  prefetch(data) {
    if (data.middle_name) {
      data.father_name = data.middle_name
    }
    return data
  }

  onValidatedData(data: any) {
    console.log(data)
  }

  async onPostedData(data) {
    // TODO
  }

}
