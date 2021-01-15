import React from 'react';
import { Education } from '../../../domain/models/resume';
import styled from 'styled-components';

type Props = {
  education: Education;
};

const Container = styled.article`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-bottom: 1rem;

  @media only print {
    break-after: page;
    flex-direction: row;
    margin: 0 0 1rem 0;
  }
`;

const Career = styled.h1`
  margin: 0;
  font-size: 1.3rem;
`;

const Institution = styled.h2`
  //font-size: 1.4rem;
  //font-weight: 400;
  //font-style: italic;
  //margin: 0;

  font-family: 'JetBrains Mono', monospace;
  color: darkmagenta;
  font-weight: 300;
  font-size: 0.8em;
  //margin-right: 0.6em;
`;

const CareerBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  width: 100%;
  margin: 0;
  font-size: 1.4rem;

  @media only print {
    justify-content: flex-start;
    align-content: flex-start;
    align-items: flex-start;
  }
`;

const StartedAt = styled.span`
  font-weight: bold;
`;

const EndedAt = styled.span`
  font-weight: bold;
`;

const Period = styled.div`
  font-size: 1.4rem;

  flex-grow: 3;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  flex-wrap: wrap;
  margin: 0;
`;
const Gpa = styled.div`
  font-size: 1.3rem;
`;

export const Separator = styled.span`
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  font-weight: normal;
`;
const extractYear = (date: string): string => date.split('-')[0];

const EducationItem: React.FC<Props> = ({ education }: Props) => {
  return (
    <Container>
      <CareerBox>
        <Career>{education.studyType}</Career>
        <Separator> | </Separator>
        <Institution>{education.institution}</Institution>
      </CareerBox>
      <Period>
        <StartedAt>{extractYear(education.startDate)} </StartedAt>
        <Separator> - </Separator>
        <EndedAt>{extractYear(education.endDate) || 'En curso'}</EndedAt>
      </Period>
    </Container>
  );
};

export default EducationItem;
