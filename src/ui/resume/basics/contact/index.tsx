import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome } from '@fortawesome/free-solid-svg-icons';
import { Container, Email, Icon, Link, Website } from './contact.styles';

type Props = {
  email: string;
  website: string;
};

const Contact: React.FC<Props> = ({ email, website }) => {
  return (
    <Container>
      <Email>
        <Icon>
          <FontAwesomeIcon icon={faEnvelope} />
        </Icon>
        <span>
          <Link href={`mailto:${email}`}>{email}</Link>
        </span>
      </Email>
      <Website>
        <Icon>
          <FontAwesomeIcon icon={faHome} />
        </Icon>
        <span>
          <Link href={website}>{website}</Link>
        </span>
      </Website>
    </Container>
  );
};

export default Contact;
