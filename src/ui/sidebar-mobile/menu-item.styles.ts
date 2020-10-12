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
  //width: 200px;
  //height: 20px;
  flex: 1;
  border: 2px solid red;
  font-size: 3rem;
`;
