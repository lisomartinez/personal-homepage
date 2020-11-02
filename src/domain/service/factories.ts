import captchaValidator from './validate-captcha';
import TelegramSender from './messaging/telegram/telegram-sender';
import EmailSender from './messaging/email/email-sender';
import ContactController from '../../controllers/contact';
import SendMessage from './send-message';
import { SendGridEmailClient } from './messaging/email/email-client';
import { TelegrafTelegramClient } from './messaging/telegram/telegram-client';

const newEmailSender = new EmailSender(new SendGridEmailClient());
const newTelegramSender = new TelegramSender(new TelegrafTelegramClient());
const contactController: ContactController = new ContactController(
  captchaValidator,
  new SendMessage([newEmailSender, newTelegramSender])
);

const createContactController = (): ContactController => {
  return contactController;
};

export default createContactController;
