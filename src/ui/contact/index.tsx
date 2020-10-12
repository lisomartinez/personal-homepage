import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

import {
  ButtonContainer,
  ContactOptions,
  Container,
  Form,
  FormField,
  Label,
  Network,
  PhoneInput,
  SendButton,
  Separator,
  SeparatorBox,
  Social,
  TextInput,
} from './contact.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

type Props = {
  siteKey: string;
};

const Contact: React.FC<Props> = ({ siteKey }) => {
  const [captcha, verify] = useState('');

  const sendForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  return (
    <Container>
      <ContactOptions>
        <Social>
          <Network>
            <FontAwesomeIcon icon={faGithub} size="5x" />
          </Network>
          <Network>
            <FontAwesomeIcon icon={faLinkedin} size="5x" />
          </Network>

          <Network>
            <FontAwesomeIcon icon={faEnvelope} size="5x" />
          </Network>
        </Social>

        <SeparatorBox>
          <Separator />
          <div>OR</div>
          <Separator />
        </SeparatorBox>

        <Form>
          <FormField>
            <Label htmlFor="name">Nombre</Label>
            <TextInput
              tabIndex={1}
              type="text"
              name={'name'}
              placeholder="John Doe"
            />
          </FormField>
          <FormField>
            <Label htmlFor="email">Email</Label>
            <TextInput
              tabIndex={2}
              type="text"
              name={'email'}
              placeholder="johndoe@example.com"
            />
          </FormField>

          <FormField>
            <Label htmlFor="phone">Telefono (opcional)</Label>
            <PhoneInput
              tabIndex={3}
              type="number"
              name={'phone'}
              placeholder="115354546"
            />
          </FormField>

          <FormField>
            <Label htmlFor="message">Mensaje</Label>
            <TextInput type="textarea" name="message" tabIndex={4} />
          </FormField>

          <FormField>
            <ReCAPTCHA
              tabIndex={5}
              sitekey={siteKey}
              onChange={(value: string) => verify(value)}
            />
          </FormField>

          <FormField>
            <ButtonContainer>
              <SendButton
                type="submit"
                disabled={captcha === ''}
                tabIndex={6}
                onClick={sendForm}
              >
                Enviar
              </SendButton>
            </ButtonContainer>
          </FormField>
        </Form>
      </ContactOptions>
    </Container>
  );
};

export default Contact;
