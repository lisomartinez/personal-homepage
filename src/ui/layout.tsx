import React, { ReactNode } from 'react';
import Sidebar from './sidebar/sidebar';
import Main from './main';
import SidebarMobile from './sidebar-mobile';
import { Container } from './layout.styles';

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = (props: Props) => {
  return (
    <Container>
      <SidebarMobile />
      <Sidebar />
      <Main> {props.children} </Main>
    </Container>
  );
};

export default Layout;
