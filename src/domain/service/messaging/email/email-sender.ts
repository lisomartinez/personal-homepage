import { createMailFromMessage } from '../../../models/email';
import { ContactMessage, ContactResponse } from '../../../models/contact';
import { EmailClient, Sender } from '../index';
import * as EmailValidator from 'email-validator';

export default class EmailSender implements Sender {
  constructor(private emailClient: EmailClient) {}

  public async send(message: ContactMessage): Promise<ContactResponse> {
    const isValidEmail = this.validate(message);
    if (!isValidEmail)
      return Promise.reject({ status: 'error', body: 'invalid message' });
    try {
      return await this.emailClient.sendMail(createMailFromMessage(message));
    } catch (error) {
      return error;
    }
  }

  private validate = (message: ContactMessage) => {
    const validEmail = EmailValidator.validate(message.email);
    const validMessageContent =
      message.message != null && message.message.trim().length != 0;
    return validMessageContent && validEmail;
  };
}
