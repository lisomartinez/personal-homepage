import React from 'react';
import styled from 'styled-components';
import Level, { LevelIndicator } from './level';

type Props = {
  level: string;
};

const Container = styled.div`
  height: 100%;
  width: 100%;
  background-color: whitesmoke;
  border: 1px solid black;
  outline-offset: 0.5rem;
`;

const Filled = styled.div<LevelIndicator>`
  height: 100%;
  width: ${(props: LevelIndicator) => `${props.level}%`};
  background-color: ${(props: LevelIndicator) => `${props.color}`};
  text-align: right;
`;

const ProgressBar: React.FC<Props> = (props: Props) => {
  const indicator: LevelIndicator = Level.getBarFor(props.level);

  return (
    <Container>
      <Filled level={indicator.level} color={indicator.color} />
    </Container>
  );
};

export default ProgressBar;
