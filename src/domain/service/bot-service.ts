import Telegram from 'telegraf/telegram';
import { TelegramMessage, TelegramResponse } from '../models/telegram';

const telegram = new Telegram(process.env.BOT_TOKEN, {
  agent: null,
  webhookReply: true,
});

const sendTelegramMessage = async (
  message: TelegramMessage
): Promise<TelegramResponse> => {
  try {
    await telegram.sendMessage(message.recipient, message.message);
    return Promise.resolve({ status: 'sent' });
  } catch (error) {
    return Promise.resolve({ status: 'error', body: 'message not sent' });
  }
};
export { sendTelegramMessage };
