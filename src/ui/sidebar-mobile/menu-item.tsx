import * as React from 'react';
import { MouseEventHandler, ReactNode } from 'react';
import { MotionListItem, TextPlaceholder } from './menu-item.styles';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

type Props = {
  children: ReactNode;
  onClick: MouseEventHandler<HTMLElement>;
};

export const MenuItem: React.FC<Props> = ({ children, onClick }) => {
  return (
    <MotionListItem
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <TextPlaceholder onClick={onClick}>{children}</TextPlaceholder>
    </MotionListItem>
  );
};
