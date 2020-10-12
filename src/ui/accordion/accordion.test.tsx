import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Accordion from './accordion';
import React from 'react';

describe('Accordion', () => {
  it('should not be render children when closed', () => {
    render(
      <div>
        <Accordion header={<div />} openByDefault={false}>
          <div />
        </Accordion>
      </div>
    );
    expect(screen.queryByTestId(/opened/)).not.toBeInTheDocument();
  });

  it('should not be render children when open', async () => {
    render(
      <div>
        <Accordion header={<div />} openByDefault={true}>
          <div />
        </Accordion>
      </div>
    );
    expect(screen.queryByTestId(/opened/)).toBeInTheDocument();
  });
});
