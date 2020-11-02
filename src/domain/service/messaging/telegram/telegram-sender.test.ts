import { ContactMessage } from '../../../models/contact';
import { TelegramClient } from '../index';
import { TelegramMessage, TelegramResponse } from '../../../models/telegram';
import TelegramSender from './telegram-sender';

describe('Telegram Sender test', () => {
  const message: ContactMessage = {
    name: 'a name',
    email: 'aaa@aaa.com',
    message: 'a message',
  };

  const client: TelegramClient = {
    sendMessage: jest.fn((message: TelegramMessage) =>
      Promise.resolve({ status: 'sent' })
    ),
  };

  let sender: TelegramSender;

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('should send message', () => {
    it('if phone is valid', async () => {
      message.email = '';
      message.phone = '12344234';

      sender = new TelegramSender(client);
      await sender.send(message);
      expect(client.sendMessage).toBeCalledTimes(1);
    });

    it('if email is valid', async () => {
      message.email = 'lisandro@yahoo.com';
      sender = new TelegramSender(client);
      await sender.send(message);
      expect(client.sendMessage).toBeCalledTimes(1);
    });
  });

  describe('should not send message', () => {
    it('if phone or email valid', async () => {
      message.email = 'asdasd';
      message.phone = null;
      sender = new TelegramSender(client);

      expect.assertions(2);
      try {
        await sender.send(message);
      } catch (err) {
        expect(err).toEqual({
          status: 'error',
          body: 'invalid message',
        });
        expect(client.sendMessage).toBeCalledTimes(0);
      }
    });
    it('if message is empty', async () => {
      const message: ContactMessage = {
        name: 'a name',
        email: 'aaa@aaa.com',
        message: '',
      };
      expect.assertions(2);
      try {
        await sender.send(message);
      } catch (err) {
        expect(err).toEqual({
          status: 'error',
          body: 'invalid message',
        });
        expect(client.sendMessage).toBeCalledTimes(0);
      }
    });
  });
});
