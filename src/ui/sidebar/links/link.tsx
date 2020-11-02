import React, { ReactNode } from 'react';
import { useRouter } from 'next/router';
import { Label, StyledLink } from './link.styles';

type Props = {
  children: ReactNode;
  path: string;
  label: string;
};

const Link: React.FC<Props> = (props: Props) => {
  const router = useRouter();

  return (
    <StyledLink
      transition={{ duration: 0.2 }}
      initial={{
        scale: 1,
        color: 'black',
      }}
      whileHover={
        {
          // fontWeight: 'bold',
          // color: '#4ea7f1',
        }
      }
      whileTap={{ scale: 0.9, x: '-2px', y: '3px' }}
    >
      {/*{props.label}*/}
      <Label isActive={router.pathname === props.path}>{props.label}</Label>
    </StyledLink>
  );
};

export default Link;
