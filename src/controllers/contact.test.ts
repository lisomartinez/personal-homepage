import ContactController from './contact';
import { ContactMessage } from '../domain/models/contact';
import { ValidateCaptcha } from '../domain/service/validate-captcha';
import { Sender } from '../domain/service/messaging';

import SendMessage from '../domain/service/send-message';
import { HttpRequest, HttpResponse } from '../domain/models/http';
import { CaptchaToken } from '../domain/models/captcha';

const createValidatedAsHuman = (): ValidateCaptcha => ({
  execute: jest.fn((key: CaptchaToken) => Promise.resolve(true)),
});

const createSuccessfulSent = (): Sender => ({
  send: jest.fn((message: ContactMessage) =>
    Promise.resolve({ status: 'sent', body: '' })
  ),
});

const assertMessageWasSent = (
  req: HttpRequest,
  res: HttpResponse,
  message: ContactMessage
) => {
  expect(res.statusCode).toBe(200);
  expect(res.json.message).toEqual(message);
};

const createValidatedAsBot = (): ValidateCaptcha => ({
  execute: jest.fn((key: CaptchaToken) => Promise.reject(false)),
});

const createValidatedWithEmptyToken = (): ValidateCaptcha => ({
  execute: jest.fn((key: CaptchaToken) => Promise.reject(false)),
});

describe('Contact Controller', () => {
  const message: ContactMessage = {
    name: 'liso',
    email: 'liso@gmail.com',
    phone: '',
    message: 'este es un mensaje',
  };

  describe('when human', () => {
    const req = {
      method: 'GET',
      body: {
        data: message,
        token: 'asdasd',
      },
    };

    const res = {
      statusCode: 200,
      json: {
        message: message,
      },
    };

    afterEach(() => {
      jest.clearAllMocks();
    });

    const validateCaptcha = createValidatedAsHuman();
    const sender = createSuccessfulSent();

    const contactController: ContactController = new ContactController(
      validateCaptcha,
      new SendMessage([sender])
    );

    it('should return message sent', async () => {
      await contactController.handle(req);
      assertMessageWasSent(req, res, message);
    });

    it('should call senders', async () => {
      await contactController.handle(req);
      expect(validateCaptcha.execute).toBeCalledTimes(1);
      expect(sender.send).toBeCalledTimes(1);
    });
  });

  describe('should not send message if', () => {
    const res = {
      statusCode: 500,
      json: {},
    };

    it('sender is bot', async () => {
      const req = {
        method: 'GET',
        body: {
          data: message,
          token: 'bottoken',
        },
      };
      const contactController: ContactController = new ContactController(
        createValidatedAsBot(),
        new SendMessage([createSuccessfulSent()])
      );

      expect.assertions(1);
      try {
        await contactController.handle(req);
      } catch (err) {
        expect(err.statusCode).toBe(500);
      }
    });

    it('sender kind is not specified', async () => {
      const req = {
        method: 'GET',
        body: {
          data: message,
          token: '',
        },
      };
      const contactController: ContactController = new ContactController(
        createValidatedWithEmptyToken(),
        new SendMessage([createSuccessfulSent()])
      );
      expect.assertions(1);
      try {
        await contactController.handle(req);
      } catch (err) {
        expect(err.statusCode).toBe(500);
      }
    });
  });
});
