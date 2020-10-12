import React from 'react';
import { Location as LocationModel } from '../../../../domain/models/resume';
import { Container } from './location.styles';

type Props = {
  location: LocationModel;
};

const Location: React.FC<Props> = ({ location }) => {
  return (
    <Container data-testid="location">
      <span>{location.city}</span>
      <span> | </span>
      <span>{location.region}</span>
    </Container>
  );
};

export default Location;
