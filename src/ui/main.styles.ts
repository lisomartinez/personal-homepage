import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Content = styled(motion.main)`
  grid-column: 3 /3;
  grid-row: 2 / 2;
  width: 100%;
  height: 100%;
  background-color: white;

  @media print {
    grid-column: 1/3;
    grid-row: 1/2;
    width: 100vw;
    height: 100vh;
  }
`;
