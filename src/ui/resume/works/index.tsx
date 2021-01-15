import React, { useState } from 'react';
import { Work } from '../../../domain/models/resume';
import { MainContainer } from '../shared/resume.styles';
import WorkComponent from './work';
import TitleComponent from '../shared/title';
import Accordion from '../../accordion/accordion';
import styled from 'styled-components';
import { Languages } from '../../../utils/language';

export const List = styled.div`
  margin-top: ${(props) => props.theme.resume.section.marginTop};
  margin-right: 0;

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
  experience: Work[];
  language: string;
};

const makeHeader = (expanded: boolean, title) => (
  <TitleComponent>{title}</TitleComponent>
);

const WorkExperience: React.FC<Props> = ({ experience, language }) => {
  const [expanded, setExpanded] = useState<boolean>(true);
  const title = language === Languages.EN ? 'EXPERIENCE' : 'EXPERIENCIA';
  return (
    <MainContainer>
      <Accordion openByDefault={true} header={makeHeader(expanded, title)}>
        <List>
          {experience.map((work) => (
            <WorkComponent
              key={work.company + work.position}
              experience={work}
              language={language}
            />
          ))}
        </List>
      </Accordion>
    </MainContainer>
  );
};

export default WorkExperience;
