import React, { useState } from 'react';
import ToggleIcon from '../shared/toggle-icon';
import Calendar from './calendar';
import { Work } from '../../../domain/models/resume';
import {
  Company,
  EndDate,
  Header,
  Icon,
  PeriodHeader,
  Position,
  PositionHeader,
  Separator,
  StartDate,
} from './work-header.styles';

type Props = {
  experience: Work;
};

const WorkHeader: React.FC<Props> = (props: Props) => {
  const [expanded, expand] = useState(false);

  return (
    <Header onClick={() => expand(!expanded)}>
      <PositionHeader>
        <Icon>
          <ToggleIcon expanded={expanded} />
        </Icon>
        <Position>{props.experience.position}</Position>
        <Company>
          <Separator>|</Separator>
          {props.experience.company}
        </Company>
      </PositionHeader>

      <PeriodHeader>
        <StartDate>
          {Calendar.convertDate(props.experience.startDate)} -{' '}
        </StartDate>
        <EndDate>{Calendar.convertDate(props.experience.endDate)}</EndDate>
      </PeriodHeader>
    </Header>
  );
};

export default WorkHeader;
