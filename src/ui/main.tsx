import React, { ReactNode } from 'react';
import { Content } from './main.styles';

type Props = {
  children: ReactNode;
};

const Main: React.FC<Props> = (props: Props) => {
  return (
    <Content
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {props.children}
    </Content>
  );
};

export default Main;
