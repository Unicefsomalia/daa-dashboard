import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConstantsService } from 'src/app/common/services/constants.service';
import { options } from './options';

@Component({
  selector: 'app-admin-reset-my-form',
  templateUrl: './admin-reset-my-form.component.html',
  styleUrls: ['./admin-reset-my-form.component.scss']
})
export class AdminResetMyFormComponent implements OnInit {

  // Myform
  formItems: any = options
  url: string = "api/v1/users/admin-reset-password"
  extra_fields: any
  originalInstance: any
  formGroupOrder = [
    ['username'],
    ['new_password']
  ]
  instance: any;

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

  preSendData(data) {
    data["HsPresave"] = true
    return data
  }

  onValidatedData(data: any) {
    console.log(data)
  }

  async onPostedData(data) {
    // Do something
  }

}
