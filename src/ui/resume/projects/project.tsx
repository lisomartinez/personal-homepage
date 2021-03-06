import React from 'react';
import styled from 'styled-components';
import Accordion from '../../accordion/accordion';
import ProjectHeader, { Header } from './project-header';
import ProjectDescription from './project-description';
import ProjectLink from './project-link';
import { Project as ProjectType } from '../../../domain/models/resume/index';
import ProjectTags from './project-tags';

export const Container = styled.article`
  margin-top: 2rem;
  margin-left: ${(props) => props.theme.resume.section.marginLeft};
  font-size: ${(props) => props.theme.resume.fontSize};
  display: flex;
  width: 100%;
  @media only print {
    margin-top: 10px;
  }
`;

function makeHeader(project: ProjectType) {
  return <ProjectHeader title={project.title} />;
}

type Props = {
  project: ProjectType;
  language: string;
};

const Project: React.FC<Props> = ({ project, language }) => {
  return (
    <Container>
      <Accordion header={makeHeader(project)} openByDefault={true}>
        <ProjectDescription description={project.description} />
        <ProjectLink language={language} link={project.link} />
      </Accordion>
    </Container>
  );
};

export default Project;
