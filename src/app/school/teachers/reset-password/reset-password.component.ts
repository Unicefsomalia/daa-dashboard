import { Component, OnInit } from '@angular/core'
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms'
import { CustomValidators } from 'ng2-validation'
import { SchoolService } from '../../school.service'
import { NotificationsService } from 'src/app/shared/notifications/notifications.service'
import { SharedService } from 'src/app/shared/shared.service'

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  public form: FormGroup
  error: any = ''

  constructor(private fb: FormBuilder, private schoolService: SchoolService, 
    private notifyService: NotificationsService, private sharedService: SharedService) {
    this.form = this.fb.group({ 
      username: [ null, Validators.compose([Validators.required ])],
      new_password: [ null, Validators.compose([Validators.required])],
      c_password: [ null, Validators.compose([Validators.required ])]
    },{
      validator: this.sharedService.confirmPasswordValidator
    }) 
   }

  ngOnInit() {
  }


  onSubmit(){

    this.schoolService.resetTeacherPassword(this.form.value).subscribe( res => {
      this.notifyService.notify('User password has been changed successfully!', 'success')
      this.form.reset()

    }, error => {
      this.error = error
      this.notifyService.notify('An error occurred on password reset!', 'error')

    })
  }

}
