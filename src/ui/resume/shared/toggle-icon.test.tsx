import { queryByTestId, render } from '@testing-library/react';
import WithTheme from '../../../utils/testutils';
import React from 'react';
import ToggleIcon from './toggle-icon';

describe('Toggle Icon', () => {
  it('should show right arrow when closed', () => {
    const { getByTestId, queryByTestId } = render(
      <WithTheme>
        <ToggleIcon expanded={false} />
      </WithTheme>
    );
    expect(getByTestId(/right/)).toBeTruthy();
    expect(queryByTestId(/down/)).toBeNull();
  });

  it('should show down arrow when opened', () => {
    const { getByTestId, queryByTestId } = render(
      <WithTheme>
        <ToggleIcon expanded={true} />
      </WithTheme>
    );
    expect(getByTestId(/down/)).toBeTruthy();
    expect(queryByTestId(/right/)).toBeNull();
  });
});
