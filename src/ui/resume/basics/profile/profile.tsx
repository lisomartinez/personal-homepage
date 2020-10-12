import React from 'react';
import { Profile as ProfileModel } from '../../../../domain/models/resume';
import ProfileIcon from './profile-icon';
import { Container, Network, Link } from './profile.styles';

type Props = {
  profile: ProfileModel;
};

const Profile: React.FC<Props> = ({ profile }) => {
  return (
    <Container>
      <Network>
        <ProfileIcon network={profile.network} />
      </Network>
      <div>
        <Link data-testid="username" href={profile.url}>
          {profile.username}
        </Link>
      </div>
    </Container>
  );
};

export default Profile;
