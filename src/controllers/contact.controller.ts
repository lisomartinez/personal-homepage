import { NextApiRequest, NextApiResponse } from 'next';

import { withCaptchaValidation } from '../lib/captcha';
import {
  createTelegramMessageFromContact,
  TelegramResponse,
} from '../domain/models/telegram';
import { sendTelegramMessage } from '../domain/service/bot-service';
import { sendMail } from '../domain/service/email-sender';
import {
  createMailFromMessage,
  EmailSenderResponse,
} from '../domain/models/email';
import { ContactMessage, ContactRequest } from '../domain/models/contact';

const handle = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  await withCaptchaValidation(req, res, send);
};

const send = async (req: NextApiRequest, res: NextApiResponse) => {
  const message: ContactMessage = extractMessage(req);

  Promise.allSettled([
    sendTelegramMessage(createTelegramMessageFromContact(message)),
    sendMail(createMailFromMessage(message)),
  ])
    .then(() => {
      res.status(200).json({ message: message });
    })
    .catch((error: EmailSenderResponse | TelegramResponse) => {
      res.status(500).json({ error });
    });
};

const extractMessage = (req: NextApiRequest): ContactMessage => {
  const requestBody: ContactRequest = req.body;
  return requestBody.data;
};

export default {
  handle,
};
