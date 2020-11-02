import { ContactMessage, ContactResponse } from '../models/contact';
import { Sender } from './messaging';

class SendMessage {
  private senders: Sender[];

  constructor(senders: Sender[]) {
    this.senders = senders;
  }

  public execute = async (
    message: ContactMessage
  ): Promise<ContactResponse[]> => {
    return Promise.allSettled([
      this.senders.map((sender) => sender.send(message)),
    ]);
  };
}

export default SendMessage;
