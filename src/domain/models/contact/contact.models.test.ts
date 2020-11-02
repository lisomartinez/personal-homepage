import { ContactMessage, ContactRequest, ContactResponse } from './index';
import { CaptchaToken } from '../captcha';

describe('Contact models test', () => {
  describe('Contact response should have valid values', () => {
    it('if sent it should contain sent', () => {
      const res: ContactResponse = {
        status: 'sent',
      };
      expect(res.status).toBe('sent');
    });
    it('if not sent should containt error', () => {
      const res: ContactResponse = {
        status: 'error',
      };
      expect(res.status).toBe('error');
    });
  });
  describe('Contact Message', () => {
    it('should have a name', () => {
      const message: ContactMessage = {
        name: 'a name',
        email: 'eas@aa.com',
        message: 'a message',
      };
      expect(message.name).toBe('a name');
    });
    it('should have a message', () => {
      const message: ContactMessage = {
        name: 'a name',
        email: 'eas@aa.com',
        message: 'a message',
      };
      expect(message.message).toBe('a message');
    });
    it('should have an email', () => {
      const message: ContactMessage = {
        name: 'a name',
        email: 'eas@aa.com',
        message: 'a message',
      };
      expect(message.email).toBe('eas@aa.com');
    });
  });
  describe('Contact Request', () => {
    it('should have a Captcha request', () => {
      const req: ContactRequest = {
        data: {
          name: 'a name',
          email: 'eas@aa.com',
          message: 'a message',
        },
        token: new CaptchaToken('a token'),
      };
      expect(req.data.name).toBe('a name');
      expect(req.data.email).toBe('eas@aa.com');
      expect(req.data.message).toBe('a message');
      expect(req.data.phone).toBeFalsy();
      expect(req.token.key).toEqual(new CaptchaToken('a token').key);
    });
  });
});
