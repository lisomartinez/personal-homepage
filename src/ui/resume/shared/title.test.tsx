import { render } from '@testing-library/react';
import WithTheme from '../../../utils/testutils';
import React from 'react';
import TitleComponent from './title';
import '@testing-library/jest-dom/extend-expect';

const title = 'a title';

describe('Title component', () => {
  it('should display title passed as children', () => {
    const { getByTestId } = render(
      <WithTheme>
        <TitleComponent>{title}</TitleComponent>
      </WithTheme>
    );
    expect(getByTestId('title-component')).toHaveTextContent(title);
  });
});
