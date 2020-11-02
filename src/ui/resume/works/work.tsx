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
};

const WorkComponent: React.FC<Props> = ({ experience }) => {
  return (
    <Container>
      <Accordion
        header={<WorkHeader experience={experience} />}
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
