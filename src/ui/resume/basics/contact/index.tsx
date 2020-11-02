import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Container, Email, Icon, Link, Phone, Website } from './contact.styles';
import { Profiles } from '../../../../utils/profiles';

type Props = {
  email: string;
  website: string;
  profile: string;
};

const Contact: React.FC<Props> = ({ email, website, profile }) => {
  return (
    <Container>
      <Email>
        <Icon>
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </Icon>
        <span>
          <Link href={`mailto:${email}`}>{email}</Link>
        </span>
      </Email>
      {profile === Profiles.DEV && (
        <Website>
          <Icon>
            <FontAwesomeIcon icon={faHome} size="2x" />
          </Icon>

          <span>
            <Link href={website}>{website}</Link>
          </span>
        </Website>
      )}
      {profile === Profiles.DEV && (
        <Phone>
          <Icon>
            <FontAwesomeIcon icon={faPhone} size="2x" />
          </Icon>
          <span>
            <Link href="tel:+541154870746">11-5487-0746</Link>
          </span>
        </Phone>
      )}
    </Container>
  );
};

export default Contact;
