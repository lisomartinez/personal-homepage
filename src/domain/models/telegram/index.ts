import { ContactMessage } from '../contact';

export interface TelegramResponse {
  status: string;
  body?: string;
}

export interface TelegramMessage {
  recipient: string;
  message: string;
}

export const createTelegramMessageFromContact = (
  message: ContactMessage
): TelegramMessage => {
  return {
    recipient: process.env.LISO_ID,
    message: `Name: ${message.name}
      Email Address: ${message.email}
      Phone: ${message.phone !== undefined ? message.phone : 'empty'}
      Message: ${message.message}`,
  };
};
