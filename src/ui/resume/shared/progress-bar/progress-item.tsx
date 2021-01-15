import React, { useEffect, useRef, useState } from 'react';

import ProgressBar from './progress-bar';
import styled from 'styled-components';
import Level from './level';
import { Languages } from '../../../../utils/language';

type BarWidth = {
  width: string;
};

const LevelBar = styled.div<BarWidth>`
  width: ${(props: BarWidth) => props.width};
  height: ${(props) => props.theme.resume.progressBar.height};

  @media only print {
    height: 7px;
    width: 100px;
  }
`;

const Name = styled.h2`
  font-size: ${(props) => props.theme.resume.progressBar.titleFontSize};
  @media only print {
    margin: 0 0 2px 0;
  }
`;

const LevelStyle = styled.div`
  margin-bottom: ${(props) =>
    props.theme.resume.progressBar.level.marginBottom};
  font-size: ${(props) => props.theme.resume.progressBar.level.fontSize};
  font-style: ${(props) => props.theme.resume.progressBar.level.fontStyle};

  @media only print {
    margin: 0 0 2px 0;
  }
`;

type Props = {
  level: string;
  name: string;
  language: string;
};

const ProgressItem: React.FC<Props> = ({ name, level, language }) => {
  const titleHeader = useRef<HTMLHeadingElement>(null);
  const [width, setWidth] = useState('0px');

  const levelComponent =
    language === Languages.EN ? (
      <LevelStyle>{level}</LevelStyle>
    ) : (
      <LevelStyle>{Level.translate(level)}</LevelStyle>
    );

  useEffect(() => {
    if (titleHeader === null || titleHeader.current === null) {
    } else {
      setWidth(`${titleHeader.current.offsetWidth}px`);
    }
  });

  return (
    <React.Fragment>
      <Name ref={titleHeader}>{name}</Name>
      {levelComponent}
      <LevelBar width={'150px'}>
        <ProgressBar level={level} />
      </LevelBar>
    </React.Fragment>
  );
};

export default ProgressItem;
