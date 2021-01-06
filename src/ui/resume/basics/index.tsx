import React from 'react';
import { Basics as BasicsModel } from '../../../domain/models/resume';
import Location from './location';
import Contact from './contact';
import ProfileList from './profile';
import Summary from './summary';
import { Container, Label, Name } from './basics.styles';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBirthdayCake,
  faFlag,
  faMapMarker,
} from '@fortawesome/free-solid-svg-icons';
import { Profiles } from '../../../utils/profiles';
import { Languages } from '../../../utils/language';
export const Icon = styled.div`
  width: 2.3rem;
  margin-right: 2rem;

  @media only print {
    font-size: 0.8rem;
    margin: 0;
  }
`;

const Nationality = styled.div`
  display: none;

  @media only print {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    align-content: center;
    margin-top: 0;
    margin-bottom: 1rem;
    width: 100%;
    height: auto;
  }
`;

const BirthDate = styled.div`
  display: none;

  @media only print {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    align-content: center;
    margin-top: 0;
    margin-bottom: 1rem;
    width: 100%;
    height: auto;
  }
`;

const Address = styled.div`
  display: none;

  @media only print {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    align-content: center;
    margin-top: 0;
    margin-bottom: 0.5rem;
    width: 100%;
    height: auto;
  }
`;

export const Link = styled.a`
  font-size: 1.4rem;

  color: ${(props) => props.theme.resume.linkColor};
`;

export const Separator = styled.span`
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  font-weight: normal;
`;

type Props = {
  basics: BasicsModel;
  profile: string;
  language: string;
};

const Basics: React.FC<Props> = ({ basics, profile, language }) => {
  const nationality =
    language === Languages.EN ? 'Nationality' : 'Nacionalidad';
  const dateOfBirth =
    language === Languages.EN ? 'Date of birth' : 'Fecha de nacimiento';
  console.log(language);
  return (
    <Container>
      <Name>{basics.name}</Name>
      <Label>{basics.label}</Label>
      <Location location={basics.location} />
      {profile === Profiles.DEV && (
        <Nationality>
          <Icon>
            <FontAwesomeIcon icon={faFlag} size="2x" />
          </Icon>
          <Link>
            {nationality}: {basics.nationality}
          </Link>
        </Nationality>
      )}

      {profile === Profiles.DEV && (
        <BirthDate>
          <Icon>
            <FontAwesomeIcon icon={faBirthdayCake} size="2x" />
          </Icon>
          <Link>{dateOfBirth}: 13 de octubre de 1984</Link>
        </BirthDate>
      )}

      {profile === Profiles.DEV && (
        <Address>
          <Icon>
            <FontAwesomeIcon icon={faMapMarker} size="2x" />
          </Icon>
          <Link href="https://goo.gl/maps/qfGQAgd6vyWNtfxF8">
            <div>
              <span>{basics.location.address}</span>
              <Separator> | </Separator>
              <span>{basics.location.region}</span>
              <Separator> | </Separator>
              <span>{basics.location.city}</span>
            </div>
          </Link>
        </Address>
      )}
      <Contact
        email={basics.email}
        website={basics.website}
        profile={profile}
      />
      <ProfileList profiles={basics.profiles} />
      <Summary summary={basics.summary} />
    </Container>
  );
};

export default Basics;
