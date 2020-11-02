import React, { useState } from 'react';
import { Work } from '../../../domain/models/resume';
import { MainContainer } from '../shared/resume.styles';
import WorkComponent from './work';
import TitleComponent from '../shared/title';
import Accordion from '../../accordion/accordion';
import styled from 'styled-components';

type Props = {
  experience: Work[];
};

const makeHeader = (expanded: boolean) => (
  <TitleComponent>EXPERIENCIA</TitleComponent>
);

export const List = styled.div`
  margin-top: ${(props) => props.theme.resume.section.marginTop};
  margin-right: 15rem;

  @media only screen and (max-width: 1450px) {
    margin-right: 5rem;
  }

  @media only screen and (max-width: 1100px) {
    margin-right: 0rem;
  }
`;

const WorkExperience: React.FC<Props> = ({ experience }) => {
  const [expanded, setExpanded] = useState<boolean>(true);

  return (
    <MainContainer>
      <Accordion openByDefault={true} header={makeHeader(expanded)}>
        <List>
          {experience.map((work) => (
            <WorkComponent
              key={work.company + work.position}
              experience={work}
            />
          ))}
        </List>
      </Accordion>
    </MainContainer>
  );
};

export default WorkExperience;
