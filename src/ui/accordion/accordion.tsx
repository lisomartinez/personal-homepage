import { AnimatePresence, motion } from 'framer-motion';
import React, { ReactNode, useState } from 'react';
import styled from 'styled-components';

type Props = {
  children: ReactNode;
  header: ReactNode;
  openByDefault: boolean;
};

const Container = styled.div`
  @media only print {
    width: 100%;
  }
`;

const Accordion: React.FC<Props> = ({ children, header, openByDefault }) => {
  const [expanded, expand] = useState(openByDefault);

  return (
    <Container>
      <motion.header
        data-testid="header"
        initial={false}
        onClick={() => expand(!expanded)}
      >
        {header}
      </motion.header>
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.section
            data-testid="opened"
            style={{ overflow: 'hidden' }}
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{
              duration: 0.5,
              ease: [0.04, 0.62, 0.23, 0.98],
            }}
          >
            {children}
          </motion.section>
        )}
      </AnimatePresence>
    </Container>
  );
};

export default Accordion;
