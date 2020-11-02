import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Summary from './index';
import React from 'react';
import WithTheme from '../../../../utils/testutils';

describe('Summary test', () => {
  it('should display summary test', () => {
    const summary = 'a summary text';
    render(
      <WithTheme>
        <Summary summary={summary} />
      </WithTheme>
    );
    expect(screen.getByTestId('summary-text')).toHaveTextContent(summary);
  });
});
