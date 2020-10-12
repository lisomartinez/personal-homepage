import { ContactMessage } from '../contact';

export interface EmailSenderResponse {
  status: string;
  body?: string;
}

export interface Email {
  to: string;
  from: string;
  subject: string;
  text: string;
  html: string;
}

export const createMailFromMessage = (message: ContactMessage): Email => ({
  from: 'lmartinezaledda@gmail.com',
  to: 'lisandromartinez@gmail.com',
  subject: 'CONTACTO - Nuevo Mensaje',
  text: '',
  html: `<div>
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
  `,
});
