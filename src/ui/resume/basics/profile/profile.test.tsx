import { Profile } from '../../../../domain/models/resume';
import ProfileComponent from './profile';
import { render } from '@testing-library/react';
import React from 'react';
import WithTheme from '../../../../utils/testutils';

describe('profile', () => {
  it("should show network's username", () => {
    const profile: Profile = {
      network: 'github',
      username: 'pepito',
      url: '',
    };
    const { getByTestId } = render(
      <WithTheme>
        <ProfileComponent profile={profile} />
      </WithTheme>
    );
    expect(getByTestId('username')).toHaveTextContent(profile.username);
  });
});
