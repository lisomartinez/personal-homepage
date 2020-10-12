import React from 'react';
import { Profile as ProfileModel } from '../../../../domain/models/resume';
import Profile from './profile';
import { Container } from './profile-list.styles';

type Props = {
  profiles: ProfileModel[];
};

const ProfileList: React.FC<Props> = ({ profiles }) => {
  return (
    <Container>
      {profiles.map((profile) => (
        <Profile key={profile.network + profile.username} profile={profile} />
      ))}
    </Container>
  );
};

export default ProfileList;
