import sgMail from '@sendgrid/mail';
import { Email, EmailSenderResponse } from '../models/email';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const sendMail = async (email: Email): Promise<EmailSenderResponse> => {
  try {
    await sgMail.send(email);
    return Promise.resolve({ status: 'sent' });
  } catch (error) {
    return Promise.reject({ status: 'error', body: error.response.body });
  }
};
