import { Injectable } from '@angular/core';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey('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');

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() { }

  sendEmail(to: string, subject: string, content: string): Promise<any> {

    const msg = {
      to: 'kjhochdoerfer@gmail.com',
      from: to,
      subject,
      html: content
    };

    return sgMail.send(msg);
  }
}
