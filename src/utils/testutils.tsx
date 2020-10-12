import { ThemeProvider } from 'styled-components';

import React, { ReactNode } from 'react';
import theme from '../theme';

type Props = {
  children: ReactNode;
};

const WithTheme: React.FC<Props> = (props: Props) => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default WithTheme;
