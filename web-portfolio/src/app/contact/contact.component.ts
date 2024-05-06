import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
//import { EmailService } from '../email.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  // successMessage: string;

  // constructor(private emailService: EmailService, private fb: FormBuilder) {
  //   this.successMessage = '';
  //  }

  // //Use form builder to create a registration form
  // emailForm: FormGroup = this.fb.group({
  //   content: [null, Validators.compose([Validators.required])],
  //   email:  [null, Validators.compose([Validators.required, Validators.email ])],
  // });

  // sendEmail(): void {
  //   const from = this.emailForm.controls['email'].value;
  //   const subject = 'Portfolio Email Form';
  //   const content = this.emailForm.controls['content'].value;

  //   this.emailService.sendEmail(from, subject, content)
  //     .then(() => {
  //       console.log('Email sent successfully');

  //       this.successMessage = "Your email was sent successfully. Thank you!"
  //       this.hideAlert();
  //     })
  //     .catch((error) => {
  //       console.error('Error sending email:', error);
  //     });
  // }

  // // Set a timeout for alert displays
  // hideAlert() {
  //   setTimeout( () => {
  //     this.successMessage = '';
  //   }, 5000)
  // }
}
