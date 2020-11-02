import { Profile } from '../../../../domain/models/resume';
import React from 'react';
import ProfileIcon from './profile-icon';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

const createProfileWithNetwork = (network: string) => ({
  network: network,
  username: 'pepito',
  url: 'https://github.com/pepito',
});

function renderIcon(profile: Profile) {
  render(<ProfileIcon network={profile.network} />);
}

describe('Profile Icon Test', () => {
  it('should display GitHub icon if profile network is GitHub', () => {
    const profile = createProfileWithNetwork('GitHub');
    renderIcon(profile);
    expect(
      screen.getByTestId('icon').querySelector('.fa-github')
    ).toBeInTheDocument();
  });

  it('should display LinkedIn icon if profile network is LinkedIn', () => {
    const profile = createProfileWithNetwork('LinkedIn');
    renderIcon(profile);
    expect(
      screen.getByTestId('icon').querySelector('.fa-linkedin')
    ).toBeInTheDocument();
  });

  it('should not display icon if profile network is empty', () => {
    const profile = createProfileWithNetwork('');
    renderIcon(profile);
    expect(
      screen.getByTestId('icon').querySelector('svg')
    ).not.toBeInTheDocument();
  });
});
