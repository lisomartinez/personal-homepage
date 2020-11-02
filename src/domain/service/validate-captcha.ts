import axios from 'axios';
import { CaptchaResponse, CaptchaToken } from '../models/captcha';

const RECAPTCHA_SERVER_KEY = process.env.RECAPTCHA_SERVER_KEY;
const url = 'https://www.google.com/recaptcha/api/siteverify';

export interface ValidateCaptcha {
  execute: (token: CaptchaToken) => Promise<boolean>;
}

const execute = async (token: CaptchaToken): Promise<boolean> => {
  console.log('TOKEN: ---> ', token.key);
  if (token.isEmpty()) return Promise.resolve(false);

  try {
    const res = await axios.post(url, null, {
      params: {
        secret: RECAPTCHA_SERVER_KEY,
        response: token.key,
      },
    });
    console.log(res.data);
    const data = res.data;
    const success = data.success;
    if (success) {
      return Promise.resolve(true);
    } else {
      return Promise.reject(false);
    }
  } catch (error) {
    console.log('captcha error:', error);
    return Promise.reject(false);
  }
};

export default { execute };
