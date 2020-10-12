import React from 'react';
import { InfoContainer, Name, ShortDescription } from './personal-infor.styles';

const PersonalInfo: React.FC = () => {
  return (
    <InfoContainer>
      <Name>Lisandro Martinez</Name>
      <ShortDescription>
        <em>Desarrollador de Software</em>{' '}
      </ShortDescription>
    </InfoContainer>
  );
};

export default PersonalInfo;
