import React, { useState } from 'react';
import ToggleIcon from '../shared/toggle-icon';
import styled from 'styled-components';
import ProjectTags from './project-tags';
import ProjectTitle from './project-title';

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
`;

export const Title = styled.div`
  font-weight: bold;
  display: inline-flex;
  //flex-direction: row;
  justify-content: flex-start;
  //align-items: center;
  //align-content: flex-start;
  width: 100%;
`;

export const Icon = styled.div`
  margin-right: 0.5rem;
`;

export const TitleHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
`;

type Props = {
  title: string;
};

const ProjectHeader: React.FC<Props> = ({ title }) => {
  const [expanded, expand] = useState(true);

  return (
    <Header onClick={() => expand(!expanded)}>
      <TitleHeader>
        <Icon>
          <ToggleIcon expanded={expanded} />
        </Icon>
        <Title>
          <ProjectTitle title={title} />
        </Title>
      </TitleHeader>
    </Header>
  );
};

export default ProjectHeader;
