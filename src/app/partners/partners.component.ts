import { Component, OnInit } from '@angular/core';
import { options } from './options';
import { ActivatedRoute, Router } from '@angular/router';
import { ConstantsService } from '../common/services/constants.service';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {

  formItems: any = options;
  url: string = "api/v1/partners/"
  extra_fields: any
  originalInstance: any
  formGroupOrder = [
    ['name'],
    ['email'],
    ['schools'],

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

  ngOnInit(): void {
  }

  getUserProfile() {
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
