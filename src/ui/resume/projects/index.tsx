import React, { useState } from 'react';
import { Languages } from '../../../utils/language';
import Accordion from '../../accordion/accordion';
import TitleComponent from '../shared/title';
import { Project as ProjectType } from '../../../domain/models/resume/index';
import Project from './project';
import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3rem;

  @media only screen and (max-width: 440px) {
    margin: 3rem 0 0 0;
  }

  @media only print {
    margin: 5rem 0 0 0;
  }
`;

const List = styled.div`
  margin-top: ${(props) => props.theme.resume.section.marginTop};
  margin-right: 15rem;

  @media only screen and (max-width: 1450px) {
    margin-right: 5rem;
  }

  @media only screen and (max-width: 1100px) {
    margin-right: 0rem;
  }

  @media only print {
    margin-right: 0;
  }
`;

type Props = {
  language: string;
  projects: ProjectType[];
};

function makeHeader(expanded: boolean, title: string) {
  return <TitleComponent>{title}</TitleComponent>;
}

const ProjectList: React.FC<Props> = ({ projects, language }) => {
  const [expanded, setExpanded] = useState<boolean>(true);
  const title = language === Languages.EN ? 'PROJECTS' : 'PROYECTOS';
  return (
    <MainContainer>
      <Accordion openByDefault={true} header={makeHeader(expanded, title)}>
        <List>
          {projects.map((project) => (
            <Project key={project.link} project={project} />
          ))}
        </List>
      </Accordion>
    </MainContainer>
  );
};

export default ProjectList;
