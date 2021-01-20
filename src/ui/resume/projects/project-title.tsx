import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const Tag = styled.span`
  font-family: 'JetBrains Mono', monospace;
  color: darkmagenta;
  font-weight: 300;
  font-size: 0.8em;
  margin-right: 0.6em;
`;

const Separator = styled.span`
  color: darkmagenta;
  font-weight: 600;
  font-size: 0.8em;
  margin-left: 0.4rem;
  margin-right: 0.5em;
`;

type Props = {
  title: string;
};

const ProjectTitle: React.FC<Props> = ({ title }) => {
  const split = title.split('(');
  const extractTitle = split[0];
  const tagField = split[1].slice(0, -1);
  const tags = tagField.split('/');

  return (
    <Title>
      {extractTitle} <Separator>|</Separator>
      {tags.map((tag) => {
        return <Tag key={tag}>{tag}</Tag>;
      })}
    </Title>
  );
};

export default ProjectTitle;
