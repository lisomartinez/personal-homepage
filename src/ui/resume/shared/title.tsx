import React, { ReactNode, useState } from 'react';
import HorizontalLine from './horizontal-line';
import { Title, TitleText } from './title.styles';
import ToggleIcon from './toggle-icon';

type Props = {
  children: ReactNode;
};

const TitleComponent: React.FC<Props> = (props: Props) => {
  const [expanded, expand] = useState<boolean>(true);

  return (
    <Title data-testid="title-component" onClick={() => expand(!expanded)}>
      <ToggleIcon expanded={expanded} />
      <TitleText>{props.children}</TitleText>
      <HorizontalLine />
    </Title>
  );
};

export default TitleComponent;
