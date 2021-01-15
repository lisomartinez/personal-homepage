import React from 'react';
import styled from 'styled-components';

export const KeywordList = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  width: 100%;
  @media only print {
    margin: 2px 0 5px 0;
  }
`;

export const Keyword = styled.span`
  font-weight: 300;
  color: #255088;
  @media only print {
    margin: 4px 5px 2px 0;
  }
`;

type Props = {
  title: string;
};

const ProjectTags: React.FC<Props> = ({ title }) => {
  const tagField = title.split('(')[1].slice(0, -1);
  const tags = tagField.split('/');
  return (
    <KeywordList>
      {tags.map((tag) => {
        return <Keyword key={tag}>{tag}</Keyword>;
      })}
    </KeywordList>
  );
};

export default ProjectTags;
