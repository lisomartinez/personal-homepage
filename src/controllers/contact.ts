import { ValidateCaptcha } from '../domain/service/validate-captcha';
import { ContactMessage, ContactRequest } from '../domain/models/contact';
import { CaptchaRequest, CaptchaToken } from '../domain/models/captcha';
import SendMessage from '../domain/service/send-message';
import { HttpRequest, HttpResponse } from '../domain/models/http';

class ContactController {
  private validateCaptcha: ValidateCaptcha;
  private sendMessage: SendMessage;

  constructor(validator: ValidateCaptcha, contactService: SendMessage) {
    this.validateCaptcha = validator;
    this.sendMessage = contactService;
  }

  public handle = async (req: HttpRequest): Promise<HttpResponse> => {
    try {
      const isValid = await this.validateCaptchaOfRequest(req);
      if (!isValid) {
        return Promise.resolve(this.sendNotHumanResponse());
      } else {
        const res = await this.sendMessageOfRequest(req);
        return res;
      }
    } catch (error) {
      return Promise.reject(this.sendErrorResponse(error));
    }
  };

  private validateCaptchaOfRequest = async (
    req: HttpRequest
  ): Promise<boolean> => {
    const requestBody: ContactRequest = req.body;
    const token: CaptchaRequest = requestBody.token;
    try {
      return await this.validateCaptcha.execute(new CaptchaToken(token.key));
    } catch (error) {
      return Promise.reject(false);
    }
  };

  private sendNotHumanResponse = () => {
    return {
      statusCode: 400,
      json: { reason: 'not human' },
    };
  };

  private sendErrorResponse = (error): HttpResponse => {
    if (error == false) {
      return {
        statusCode: 500,
        json: error.message,
      };
    } else {
      return {
        statusCode: error.statusCode,
        json: error.message,
      };
    }
  };

  private sendMessageOfRequest = async (
    req: HttpRequest
  ): Promise<HttpResponse> => {
    const message: ContactMessage = this.extractMessage(req);
    try {
      await this.sendMessage.execute(message);
      return this.successfulResponse(message);
    } catch (error) {
      return this.errorResponse(error);
    }
  };

  private successfulResponse(message: ContactMessage) {
    return { statusCode: 200, json: { message: message } };
  }

  private errorResponse(error) {
    return { statusCode: 500, json: { error } };
  }

  private extractMessage = (req: HttpRequest): ContactMessage => {
    const requestBody: ContactRequest = req.body;
    return requestBody.data;
  };
}

export default ContactController;
