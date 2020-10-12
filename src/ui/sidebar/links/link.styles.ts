import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledLink = styled(motion.li)`
  text-decoration: none;
  margin-top: 1.5rem;
  padding: 0;
  //cursor: pointer;
`;

export type LabelProps = {
  isActive: boolean;
};

export const Label = styled.div<LabelProps>`
  padding-bottom: 1px;
  margin-bottom: 1rem;
  font-weight: inherit;
  color: ${(props) => {
    return props.isActive ? 'blue' : 'black';
  }};
  cursor: pointer;
  transition-property: border-bottom;
  transition-duration: 1000ms;
  transition-delay: 1000ms;

  &:after {
    content: '';
    display: block;
    margin: auto;
    height: ${(props) => (props.isActive ? '0px' : '2px')};
    width: 0;
    background: transparent;
    transition: width 0.3s ease, background-color 0.5s ease;
  }
  &:hover:after {
    width: 100%;
    background-color: #4ea7f1;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-grow: 0;
`;

export const Svg = styled.svg`
  display: block;
  width: 100px;
  height: 2px;
`;
