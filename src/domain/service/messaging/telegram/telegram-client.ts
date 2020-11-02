import { TelegramClient } from '../index';
import { TelegramMessage, TelegramResponse } from '../../../models/telegram';
import { Telegram } from 'telegraf';

export class TelegrafTelegramClient implements TelegramClient {
  private telegram: Telegram;

  constructor() {
    this.telegram = new Telegram(process.env.BOT_TOKEN, {
      agent: null,
      webhookReply: true,
    });
  }

  sendMessage = (message: TelegramMessage): Promise<TelegramResponse> => {
    return this.telegram
      .sendMessage(message.recipient, message.content)
      .then(() => ({ status: 'sent' }))
      .catch((error) => ({ status: 'error', body: 'message not sent' }));
  };
}
