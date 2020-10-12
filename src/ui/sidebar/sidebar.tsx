import React from 'react';
import LinkList from './links';
import PageLink from './links/link';
import Avatar from './avatar/avatar';
import PersonalInfo from './personal-info';
import Link from 'next/link';
import { Bar, UpperMargin } from './sidebar.styles';

const Sidebar: React.FC = () => {
  return (
    <Bar
    // initial={{ x: -100, opacity: 0 }}
    // animate={{ x: 0, opacity: 1 }}
    // transition={{ type: 'spring', delay: 0.3, stiffness: 20 }}
    >
      <UpperMargin />
      <Avatar />
      <PersonalInfo />
      <LinkList>
        <Link href="/">
          <a>
            <PageLink label="INICIO" path="/">
              INICIO
            </PageLink>
          </a>
        </Link>
        <Link href="/contact">
          <a>
            <PageLink label="CONTACTO" path="/contact">
              CONTACTO
            </PageLink>
          </a>
        </Link>
        <Link href="/projects">
          <a>
            <PageLink label="PROYECTOS" path="/projects">
              PROYECTOS
            </PageLink>
          </a>
        </Link>
      </LinkList>
    </Bar>
  );
};

export default Sidebar;
