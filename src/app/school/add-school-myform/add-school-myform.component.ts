import { Component, OnInit } from '@angular/core';
import { options } from './options';

@Component({
  selector: 'app-add-school-myform',
  templateUrl: './add-school-myform.component.html',
  styleUrls: ['./add-school-myform.component.scss']
})
export class AddSchoolMyformComponent implements OnInit {

  formItems: any = options;
  url: string = "api/v1/schools/"
  extra_fields: any
  originalInstance: any
  formGroupOrder = [
    ['name'],
    ['emis_code'],
    ['phone', 'email'],
    ['location', 'gender'],
    ['village']
  ]


  ngOnInit() {
  }

  onValidatedData(data: any) {
    console.log(data)
  }

  async onPostedData(data) {
    // TODO
  }


}
