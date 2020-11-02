import styled from 'styled-components';
import { motion } from 'framer-motion';

export const MotionListItem = styled(motion.li)`
  list-style: none;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const TextPlaceholder = styled.div`
  border-radius: 5px;
  flex: 1;
  font-size: 3rem;
`;
