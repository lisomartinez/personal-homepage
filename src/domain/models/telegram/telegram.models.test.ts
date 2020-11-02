import { createTelegramMessageFromContact, TelegramMessage } from './index';
import { ContactMessage } from '../contact';

describe('Telegram models tests', () => {
  const message: TelegramMessage = {
    content: 'a message',
    recipient: 'recipient',
  };
  describe('a message', () => {
    it('should have a content', () => {
      expect(message.content).toBe('a message');
    });

    it('should have a recipient', () => {
      expect(message.recipient).toBe('recipient');
    });
  });

  describe('create telegram message from contact message', () => {
    const message: ContactMessage = {
      message: 'a message',
      name: 'a name',
      email: 'an email',
      phone: '123123',
    };

    const messageContent = `Message: ${message.message}`;
    const telegramMessage: TelegramMessage = createTelegramMessageFromContact(
      message
    );

    it('should have name field', () => {
      const name = `Name: ${message.name}`;
      expect(telegramMessage.content).toContain(name);
    });

    it('should have an email field', () => {
      const email = `Email Address: ${message.email}`;
      expect(telegramMessage.content).toContain(email);
    });

    it('should have a phone field if phone was entered', () => {
      const phone = `Phone: ${message.phone}`;
      expect(telegramMessage.content).toContain(phone);
    });

    it('should have a phone field with empty word if phone was not entered', () => {
      const message: ContactMessage = {
        message: 'a message',
        name: 'a name',
        email: 'an email',
      };

      const messageContent = `Message: ${message.message}`;
      const telegramMessage: TelegramMessage = createTelegramMessageFromContact(
        message
      );
      const phone = 'Phone: empty';
      expect(telegramMessage.content).toContain(phone);
    });

    it('should have a message field', () => {
      const messageContent = `Message: ${message.message}`;
      expect(telegramMessage.content).toContain(messageContent);
    });
  });
});
