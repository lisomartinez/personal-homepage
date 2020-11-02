import { Profile } from '../../../../domain/models/resume';
import ProfileComponent from './profile';
import { render, screen, cleanup } from '@testing-library/react';
import React from 'react';
import WithTheme from '../../../../utils/testutils';
import '@testing-library/jest-dom/extend-expect';

const createProfileWithAllFields = () => ({
  network: 'GitHub',
  username: 'pepito',
  url: 'http://liso.com',
});

const createProfileWithoutUrl = () => ({
  network: 'GitHub',
  username: 'pepito',
  url: ' ',
});

function renderProfile(profile: {
  url: string;
  network: string;
  username: string;
}) {
  render(
    <WithTheme>
      <ProfileComponent profile={profile} />
    </WithTheme>
  );
}

const createProfileWithNetwork = (network: string) => ({
  network: network,
  username: 'pepito',
  url: 'https://github.com/pepito',
});
describe('profile', () => {
  afterEach(() => {
    cleanup();
  });

  it("should show network's username", () => {
    const profile = createProfileWithAllFields();
    renderProfile(profile);
    expect(screen.getByTestId('username')).toHaveTextContent(profile.username);
  });

  it('should include link if url not empty', () => {
    const profile = createProfileWithAllFields();
    renderProfile(profile);

    expect(screen.getByTestId('username')).toHaveAttribute('href', profile.url);
  });

  it('should include link to # if url is empty', () => {
    const profile = createProfileWithoutUrl();
    renderProfile(profile);
    expect(screen.getByTestId('username')).toHaveAttribute('href', '#');
  });

  it('should display GitHub icon if profile network is GitHub', () => {
    const profile = createProfileWithNetwork('GitHub');
    renderProfile(profile);
    expect(
      screen.getByTestId('profile-icon').querySelector('.fa-github')
    ).toBeInTheDocument();
  });

  it('should display LinkedIn icon if profile network is LinkedIn', () => {
    const profile = createProfileWithNetwork('LinkedIn');
    renderProfile(profile);
    expect(
      screen.getByTestId('profile-icon').querySelector('.fa-linkedin')
    ).toBeInTheDocument();
  });

  it('should not display icon if profile network is empty', () => {
    const profile = createProfileWithNetwork('');
    renderProfile(profile);
    expect(
      screen.getByTestId('profile-icon').querySelector('svg')
    ).not.toBeInTheDocument();
  });
});
