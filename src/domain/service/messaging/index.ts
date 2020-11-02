import { ContactMessage, ContactResponse } from '../../models/contact';
import { Email, EmailSenderResponse } from '../../models/email';
import { TelegramMessage, TelegramResponse } from '../../models/telegram';

export interface Sender {
  send: (message: ContactMessage) => Promise<ContactResponse>;
}

export interface EmailClient {
  sendMail: (email: Email) => Promise<EmailSenderResponse>;
}

export interface TelegramClient {
  sendMessage: (message: TelegramMessage) => Promise<TelegramResponse>;
}
