import { HttpRequest, HttpResponse } from './index';
import { ContactRequest } from '../contact';
import { CaptchaToken } from '../captcha';

describe('Http models test', () => {
  describe('Http request', () => {
    const req: HttpRequest = {
      method: 'GET',
      body: {},
    };
    it('should have method', () => {
      expect(req.method).toBe('GET');
    });
    it('should have body of any kind', () => {
      const requestBody: ContactRequest = {
        token: new CaptchaToken('asd'),
        data: {
          name: 'a name',
          email: 'aaa@aaa.com',
          message: 'a message',
        },
      };
      req.body = {
        data: requestBody,
      };

      expect(req.body.data.data).toEqual(requestBody.data);
    });
  });

  describe('Http Response', () => {
    const res: HttpResponse = {
      statusCode: 200,
      json: {
        status: 'sent',
      },
    };

    it('should have status code', () => {
      expect(res.statusCode).toBe(200);
    });

    it('should have json field', () => {
      expect(res.json).toEqual({ status: 'sent' });
    });
  });
});
