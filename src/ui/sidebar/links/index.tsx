import React, { ReactNode } from 'react';
import { StyledLinks } from './link-list.styles';

type Props = {
  children: ReactNode;
};

const LinkList: React.FC<Props> = (props: Props) => {
  return <StyledLinks>{props.children}</StyledLinks>;
};

export default LinkList;
