import { ContactMessage } from '../contact';

export interface TelegramResponse {
  status: string;
  body?: string;
}

export interface TelegramMessage {
  recipient: string;
  content: string;
}

export const createTelegramMessageFromContact = (
  message: ContactMessage
): TelegramMessage => {
  return {
    recipient: process.env.LISO_ID,
    content: `Name: ${message.name}
      Email Address: ${message.email}
      Phone: ${message.phone !== undefined ? message.phone : 'empty'}
      Message: ${message.message}`,
  };
};
