import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Bar = styled(motion.div)`
  grid-column: 2 / 2;
  grid-row: 2 / 2;
  background-color: #f2f3f7;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 0.5fr 1fr 1fr 4fr 0.5fr;
  overflow: hidden;
  position: sticky;
  top: 60px;
  @media only screen and (max-width: 768px) {
    display: none;
  }

  @media only print {
    display: none;
    content: '';
  }
  // eslint-disable-next-line
  grid-template-areas:
    'uppper-margin'
    'image'
    'info'
    'links'
    'bottom-margin';

  width: 100%;
  height: 100%;
`;

export const UpperMargin = styled.div`
  grid-area: upper-margin;
  width: 100%;
  height: 100%;
`;

export const BottomMargin = styled.div`
  grid-area: bottom-margin;
  width: 100%;
  height: 100%;
`;
