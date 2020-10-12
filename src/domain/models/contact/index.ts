import { CaptchaRequest } from '../captcha';

export interface ContactMessage {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export interface ContactRequest {
  data: ContactMessage;
  token: CaptchaRequest;
}
