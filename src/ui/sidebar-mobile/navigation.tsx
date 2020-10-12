import * as React from 'react';
import { MouseEventHandler } from 'react';
import { MenuItem } from './menu-item';
import Link from 'next/link';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Cv from '../../../data/cv.svg';
import { Icon, MotionUnorderedList, StyledLink } from './navigation.styles';

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

type Props = {
  toggle: MouseEventHandler<HTMLElement>;
};

export const Navigation: React.FC<Props> = ({ toggle }) => (
  <MotionUnorderedList variants={variants}>
    {/*{itemIds.map((i) => (*/}
    {/*  <MenuItem i={i} key={i} />*/}
    {/*))}*/}
    <MenuItem onClick={toggle}>
      <Link href="/">
        <StyledLink>
          <Icon>
            <FontAwesomeIcon icon={faHome} size="1x" />
          </Icon>
          <span>INICIO</span>
        </StyledLink>
      </Link>
    </MenuItem>
    <MenuItem onClick={toggle}>
      <Link href="/resume">
        <StyledLink>
          <Icon>
            <img src={Cv} />
          </Icon>
          <span>CV</span>
        </StyledLink>
      </Link>
    </MenuItem>
  </MotionUnorderedList>
);

const itemIds = [0, 1, 2, 3, 4];
