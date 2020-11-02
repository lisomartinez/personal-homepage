import { createMailFromMessage, Email } from './index';
import { ContactMessage } from '../contact';

describe('Email models test', () => {
  const toEmail = 'recipient@email.com';
  const fromEmail = 'sender@email.com';

  const message: ContactMessage = {
    name: 'a name',
    message: 'a message',
    email: 'eas@gmail.com',
  };
  const html = `<div>
          <h1>Nuevo Mensaje de ${message.name}</h1>
          <h2>Datos</h2>
          <ul>
            <li>${message.email}</li>
            <li>${message.phone}</li>           
          </ul>
          <h2>Mensaje</h2>
          <div>
            ${message.message}
          </div>
        </div>   
  `;
  const email: Email = {
    to: toEmail,
    from: fromEmail,
    text: 'a text',
    subject: 'a subject',
    html: html,
  };
  describe('An email should', () => {
    it('have a sender', () => {
      expect(email.from).toBe(fromEmail);
    });
    it('have a recipient', () => {
      expect(email.to).toBe(toEmail);
    });

    it('have a text', () => {
      expect(email.text).toBe('a text');
    });

    it('have an html', () => {
      expect(email.html).toBe(html);
    });

    it('have a subject', () => {
      expect(email.subject).toBe('a subject');
    });
  });

  describe('create email from contact message should', () => {
    const created = createMailFromMessage(message);

    it('use contact message name as header content', () => {
      expect(created.html).toContain(
        `<h1>Nuevo Mensaje de ${message.name}</h1>`
      );
    });

    it('use contact a list element with email', () => {
      expect(created.html).toContain(`<li>${message.email}</li>`);
    });

    it('use contact a list element with phone', () => {
      expect(created.html).toContain(`<li>${message.phone}</li>`);
    });

    it('contains sender information', () => {
      expect(created.html).toContain(
        `<ul>
            <li>${message.email}</li>
            <li>${message.phone}</li>           
          </ul>`
      );
    });
    it('contains the message sent', () => {
      expect(created.html).toContain(
        `<h2>Mensaje</h2>
          <div>
            ${message.message}
          </div>
        `
      );
    });
  });
});
