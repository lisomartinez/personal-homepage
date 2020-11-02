import React from 'react';
import styled from 'styled-components';
import Level, { LevelIndicator } from './level';

type Props = {
  level: string;
};

const Container = styled.div`
  height: 100%;
  width: 100%;
  background-color: #e6e6e6;
  box-shadow: 1.5px 1.5px 1.5px 1px rgba(0, 0, 255, 0.2);
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
