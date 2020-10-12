import React, { useRef } from 'react';
import { useDimensions } from '../use-dimensions';
import { AnimatePresence, useCycle } from 'framer-motion';
import { MenuToggle } from './menu-toggle';
import { Navigation } from './navigation';
import {
  Background,
  Container,
  Modal,
  ModalBackground,
  Nav,
} from './index.styles';

const modalVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(30px at 40px 40px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

const SidebarMobile: React.FC = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  return (
    <Container>
      <AnimatePresence>
        {isOpen && (
          <>
            <Modal
              variants={modalVariants}
              initial={'hidden'}
              animate={'visible'}
              exit={'exit'}
              onClick={() => toggleOpen()}
            />
            <ModalBackground
              variants={modalVariants}
              exit={'exit'}
              onClick={() => toggleOpen()}
            />
          </>
        )}
      </AnimatePresence>
      <Nav
        initial={false}
        variants={sidebar}
        animate={isOpen ? 'open' : 'closed'}
        custom={height}
        ref={containerRef}
      >
        <Background variants={sidebar} />
        <Navigation toggle={() => toggleOpen()} />
        <MenuToggle toggle={() => toggleOpen()} />
      </Nav>
    </Container>
  );
};

export default SidebarMobile;
