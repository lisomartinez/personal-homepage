import { Email, EmailSenderResponse } from '../../../models/email';
import sgMail from '@sendgrid/mail';
import { EmailClient } from '../index';

export class SendGridEmailClient implements EmailClient {
  async sendMail(email: Email): Promise<EmailSenderResponse> {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    console.log('email client: ', email);
    try {
      const res = await sgMail.send({
        to: email.to,
        from: email.from, // Use the email address or domain you verified above
        subject: email.subject,
        text: 'email.text',
        html: email.html,
      });
      console.log('send grid res: ', res);
      return Promise.resolve({ status: 'sent' });
    } catch (error) {
      console.log('send grid error: ', error);
      return Promise.reject({ status: 'error', body: { ...error } });
    }
  }
}
