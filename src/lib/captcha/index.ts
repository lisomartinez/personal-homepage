import { NextApiRequest, NextApiResponse } from 'next';
import validate from './captch-validator';
import { ContactRequest } from '../../domain/models/contact';
import { CaptchaRequest } from '../../domain/models/captcha';

export type OnSuccessHandler = (
  req: NextApiRequest,
  res: NextApiResponse
) => Promise<void>;

export const withCaptchaValidation = async (
  req: NextApiRequest,
  res: NextApiResponse,
  next: OnSuccessHandler
): Promise<void> => {
  try {
    const validatedAsHuman = await validateCaptcha(req);
    if (validatedAsHuman) {
      await next(req, res);
    } else {
      sendInvalidCaptchaResponse(res);
    }
  } catch (error) {
    sendInvalidCaptchaResponse(res);
  }
};

const validateCaptcha = async (req: NextApiRequest): Promise<boolean> => {
  const requestBody: ContactRequest = req.body;
  const token: CaptchaRequest = requestBody.token;

  return await validate(token.key);
};

const sendInvalidCaptchaResponse = (res: NextApiResponse) => {
  res.statusCode = 500;
  res.end('is not human');
};
