import React from 'react';
import { Work } from '../../../domain/models/resume';
import Accordion from '../../accordion/accordion';
import WorkHeader from './work-header';
import {
  Container,
  HighlightItem,
  HighlightList,
  Summary,
  Website,
} from './work.styles';

type Props = {
  experience: Work;
  language: string;
};

const WorkComponent: React.FC<Props> = ({ experience, language }) => {
  return (
    <Container>
      <Accordion
        header={<WorkHeader experience={experience} language={language} />}
        openByDefault={true}
      >
        <Website>{experience.website}</Website>
        <Summary>{experience.summary}</Summary>
        <HighlightList>
          {experience.highlights.map((hl) => (
            <HighlightItem key={hl}>{hl}</HighlightItem>
          ))}
        </HighlightList>
      </Accordion>
    </Container>
  );
};

export default WorkComponent;
