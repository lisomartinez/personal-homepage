import React from 'react';
import styled from 'styled-components';

type Props = {
  link: string;
};

const Link = styled.a`
  font-family: 'JetBrains Mono', monospace;
  font-weight: 600;
  font-size: 1.2rem;
  color: darkcyan;
`;

const Tag = styled.div`
  font-weight: 400;
  margin-right: 0.3rem;
  font-size: 1rem;
`;
const Container = styled.div`
  margin: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ProjectLink: React.FC<Props> = ({ link }) => {
  return (
    <Container>
      <Tag>REPOSITORIO:</Tag>
      <Link>{link}</Link>
    </Container>
  );
};

export default ProjectLink;
