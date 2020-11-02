import { createTelegramMessageFromContact } from '../../../models/telegram';
import { ContactMessage, ContactResponse } from '../../../models/contact';
import { Sender, TelegramClient } from '../index';
import * as EmailValidator from 'email-validator';

export default class TelegramSender implements Sender {
  constructor(private telegramClient: TelegramClient) {}

  public send(message: ContactMessage): Promise<ContactResponse> {
    const isValid = this.validate(message);
    if (!isValid)
      return Promise.reject({ status: 'error', body: 'invalid message' });
    const telegramMessage = createTelegramMessageFromContact(message);
    return this.telegramClient
      .sendMessage(telegramMessage)
      .then((res) => ({
        status: res.status,
      }))
      .catch((errors) => errors);
  }

  private validate(message: ContactMessage): boolean {
    const validEmail = EmailValidator.validate(message.email);
    const validPhone =
      message.phone != null && message.phone.trim().length != 0;
    const validContent =
      message.message != null && message.message.trim().length != 0;
    return validContent && (validEmail || validPhone);
  }
}
