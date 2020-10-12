import React from 'react';
import { render } from '@testing-library/react';
import WithTheme from '../../../../utils/testutils';
import Location from './index';
import { Location as LocationModel } from '../../../../domain/models/resume';
import '@testing-library/jest-dom/extend-expect';

const location: LocationModel = {
  address: 'Arenales 4000 pb',
  postalCode: '1602',
  city: 'Vicente Lopez',
  countryCode: 'Argentina',
  region: 'Buenos Aires',
};

describe('Location Component', () => {
  it('should display city and region', () => {
    const { getByTestId } = render(
      <WithTheme>
        <Location location={location} />
      </WithTheme>
    );
    expect(getByTestId('location')).toHaveTextContent(
      'Vicente Lopez | Buenos Aires'
    );
  });
});
