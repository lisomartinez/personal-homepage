import React from 'react';
import { Resume as ResumeModel } from '../../domain/models/resume';
import Basics from './basics';
import Skills from './skills';
import styled from 'styled-components';
import WorkExperience from './works';
import LanguageList from './languages';
import EducationList from './education';

const Container = styled.div`
  margin: 3rem;
  display: flex;
  flex-direction: column;
`;

type Props = {
  resume: ResumeModel;
  profile: string;
};

const Resume: React.FC<Props> = ({ resume, profile }) => {
  return (
    <Container>
      <Basics basics={resume.basics} profile={profile} />
      <Skills skills={resume.skills} />
      <EducationList educationList={resume.education} />
      <WorkExperience experience={resume.work} />
      <LanguageList languages={resume.languages} />
    </Container>
  );
};

export default Resume;
