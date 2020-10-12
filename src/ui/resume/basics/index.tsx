import React from 'react';
import { Basics as BasicsModel } from '../../../domain/models/resume';
import Location from './location';
import Contact from './contact';
import ProfileList from './profile';
import Summary from './summary';
import { Container, Label, Name } from './basics.styles';

type Props = {
  basics: BasicsModel;
};

const Basics: React.FC<Props> = ({ basics }) => {
  return (
    <Container>
      <Name>{basics.name}</Name>
      <Label>{basics.label}</Label>
      <div>{basics.nationality}</div>
      <Location location={basics.location} />
      <Contact email={basics.email} website={basics.website} />
      <ProfileList profiles={basics.profiles} />
      <Summary summary={basics.summary} />
    </Container>
  );
};

export default Basics;
