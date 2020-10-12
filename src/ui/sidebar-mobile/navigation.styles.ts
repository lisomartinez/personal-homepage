import styled from 'styled-components';
import { motion } from 'framer-motion';

export const MotionUnorderedList = styled(motion.ul)`
  padding: 25px;
  position: absolute;
  top: 100px;
  width: 230px;
`;

export const Icon = styled.div`
  margin-right: 1rem;
  width: 30px;
  height: 30px;
`;

export const StyledLink = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-content: center;
  align-items: center;
`;
