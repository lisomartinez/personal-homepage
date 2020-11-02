import React from 'react';
import { Resume as ResumeModel } from '../../domain/models/resume';
import Basics from './basics';
import Skills from './skills';
import styled from 'styled-components';
import WorkExperience from './works';
import LanguageList from './languages';
import EducationList from './education';
import Avatar from '../sidebar/avatar/avatar';
import { Profiles } from '../../utils/profiles';

const Container = styled.div`
  margin: 3rem;
  display: flex;
  flex-direction: column;

  @media only print {
    margin-top: 0;
  }
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
      {profile === Profiles.DEV && <Avatar />}
      <EducationList educationList={resume.education} />
      <WorkExperience experience={resume.work} />
      <LanguageList languages={resume.languages} />
    </Container>
  );
};

export default Resume;
