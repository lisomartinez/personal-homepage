import { EmailClient } from '../index';
import { Email } from '../../../models/email';
import EmailSender from './email-sender';
import { ContactMessage } from '../../../models/contact';

describe('Email sender test', () => {
  const emailClient: EmailClient = {
    sendMail: jest.fn((email: Email) => Promise.resolve({ status: 'sent' })),
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  const message: ContactMessage = {
    name: 'a name',
    email: 'aaa@aaa.com',
    message: 'a message',
  };

  const emailSender: EmailSender = new EmailSender(emailClient);
  it('should call client when send email', () => {
    emailSender.send(message);
    expect(emailClient.sendMail).toBeCalledTimes(1);
  });

  it('should not call client when email address is not valid', async () => {
    message.email = '';
    expect.assertions(2);
    try {
      await emailSender.send(message);
    } catch (err) {
      expect(emailClient.sendMail).not.toBeCalled();
      expect(err).toEqual({
        status: 'error',
        body: 'invalid message',
      });
    }
  });

  it('should not send message when message content is empty', async () => {
    message.message = '';
    expect.assertions(2);
    try {
      await emailSender.send(message);
    } catch (err) {
      expect(emailClient.sendMail).not.toBeCalled();
      expect(err).toEqual({
        status: 'error',
        body: 'invalid message',
      });
    }
  });
});
