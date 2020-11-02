import React from 'react';
import { Profile as ProfileModel } from '../../../../domain/models/resume';
import ProfileIcon from './profile-icon';
import { Container, Link, Network } from './profile.styles';

type Props = {
  profile: ProfileModel;
};

const Profile: React.FC<Props> = ({ profile }) => {
  return (
    <Container>
      <Network data-testid="profile-icon">
        <ProfileIcon network={profile.network} />
      </Network>
      <div>
        <Link
          data-testid="username"
          href={profile.url.trim().length > 0 ? profile.url : '#'}
        >
          {profile.username}
        </Link>
      </div>
    </Container>
  );
};

export default Profile;
