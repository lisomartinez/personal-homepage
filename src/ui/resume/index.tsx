import React from 'react';
import { Resume as ResumeModel } from '../../domain/models/resume';
import Basics from './basics';
import Skills from './skills';
import styled from 'styled-components';
import WorkExperience from './works';
import LanguageList from './languages';
import EducationList from './education';

type Props = {
  resume: ResumeModel;
};

const Container = styled.div`
  margin: 3rem;
  display: flex;
  flex-direction: column;
`;

const Resume: React.FC<Props> = ({ resume }) => {
  return (
    <Container>
      <Basics basics={resume.basics} />
      <Skills skills={resume.skills} />
      <EducationList educationList={resume.education} />
      <WorkExperience experience={resume.work} />
      <LanguageList languages={resume.languages} />
    </Container>
  );
};

export default Resume;
