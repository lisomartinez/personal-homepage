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
      <div>
        <Accordion
          header={<WorkHeader experience={experience} />}
          openByDefault={false}
        >
          <Website>{experience.website}</Website>
          <Summary>{experience.summary}</Summary>
          <HighlightList>
            {experience.highlights.map((hl) => (
              <HighlightItem key={hl}>{hl}</HighlightItem>
            ))}
          </HighlightList>
        </Accordion>
      </div>
    </Container>
  );
};

export default WorkComponent;
