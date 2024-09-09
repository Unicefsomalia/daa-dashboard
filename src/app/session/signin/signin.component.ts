import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms'

import { SessionService } from '../session.service'
import { ConstantsService } from 'src/app/common/services/constants.service'
import { environment } from 'src/environments/environment'
import mixpanel from 'mixpanel-browser'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  public form: FormGroup
  checked: false
  loginError: string = ''
  loaderStatus: boolean = false
  currentYear: number = new Date().getFullYear();

  constructor(private fb: FormBuilder, private router: Router, private auth: SessionService, private constantService: ConstantsService) {
    this.form = this.fb.group({
      username: [null, Validators.compose([Validators.required])],
      password: [null, Validators.compose([Validators.required])],
      checked: [null]
    })
  }

  ngOnInit() {
  }

  onSubmit() {
    this.loaderStatus = true
    this.loginError = ""
    this.auth.login(this.form.value).subscribe(res => {
      this.loaderStatus = false
      const user = res as any;
      if (environment.production) {
        mixpanel.identify(user.id);
        mixpanel.people.set({
          '$username': user.username,
          '$email': user.email,
          '$last_login': new Date(),
        })
      }
      this.router.navigate(['/'])
    }, err => {
      this.loaderStatus = false
      this.loginError = err
    })
  }

}
