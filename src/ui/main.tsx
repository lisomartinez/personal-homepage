import React, { ReactNode } from 'react';
import { Content } from './main.styles';

type Props = {
  children: ReactNode;
};

const Main: React.FC<Props> = (props: Props) => {
  return <Content>{props.children}</Content>;
};

export default Main;
