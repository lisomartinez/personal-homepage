import React from 'react';
import styled from 'styled-components';

type Props = {
  description: string;
};

export const Description = styled.div`
  margin: 1rem;
  @media only print {
    margin-top: 10px;
  }
`;

const ProjectDescription: React.FC<Props> = ({ description }) => {
  return <Description>{description}</Description>;
};

export default ProjectDescription;
