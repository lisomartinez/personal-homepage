import React from 'react';
import { Education } from '../../../domain/models/resume';
import styled from 'styled-components';

type Props = {
  education: Education;
};

const Container = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  margin-bottom: 3rem;
`;

const Career = styled.h1`
  margin: 0;
`;

const Institution = styled.h2`
  font-size: 1.4rem;
  font-weight: 400;
  font-style: italic;
  margin: 0;
`;

const CareerBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin: 0;
  font-size: 1.4rem;
`;

const StartedAt = styled.span``;

const EndedAt = styled.span``;

const Period = styled.div``;
const Gpa = styled.div`
  font-size: 1.3rem;
`;
const extractYear = (date: string): string => date.split('-')[0];

const EducationItem: React.FC<Props> = ({ education }: Props) => {
  return (
    <Container>
      <CareerBox>
        <Career>{education.studyType}</Career>
        <Period>
          <StartedAt>{extractYear(education.startDate)} - </StartedAt>
          <EndedAt>{extractYear(education.endDate) || 'en curso'}</EndedAt>
        </Period>
      </CareerBox>
      <Institution>{education.institution}</Institution>
      <Gpa>{education.gpa ? `Promedio: ${education.gpa}` : null}</Gpa>
    </Container>
  );
};

export default EducationItem;
