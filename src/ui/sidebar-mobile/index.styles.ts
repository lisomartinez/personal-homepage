import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
  display: none;
  @media only screen and (max-width: 1000px) {
    display: flex;
    width: 100vw;
    height: 100vh;
    margin-left: 0.5rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
`;

export const Nav = styled(motion.nav)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 300px;
  z-index: 100;
`;

export const Background = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 300px;
  background: ${(props) => props.theme.navbar.backgroundColor};
`;

export const Modal = styled(motion.div)`
  opacity: 1;
  position: absolute;
  top: 0;
  left: 300px;
  width: calc(100% - 300px);
  height: 100vh;
  backdrop-filter: blur(10px);
`;

export const ModalBackground = styled(motion.div)`
  background-color: black;
  opacity: 0.7;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;
