import React from 'react';
import styled from 'styled-components';
import { Languages } from '../../../utils/language';

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

type Props = {
  link: string;
  language: string;
};

const ProjectLink: React.FC<Props> = ({ link, language }) => {
  const repository = language === Languages.EN ? 'REPOSITORY' : 'REPOSITORIO';
  return (
    <Container>
      <Tag>{repository}</Tag>
      <Link href={link}>{link}</Link>
    </Container>
  );
};

export default ProjectLink;
