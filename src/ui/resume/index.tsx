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

const ImageContainer = styled.div`
  display: none;
  @media only print {
    display: flex;
  }
`;

type Props = {
  resume: ResumeModel;
  profile: string;
  language: string;
};

const Resume: React.FC<Props> = ({ resume, profile, language }) => {
  return (
    <Container>
      <Basics basics={resume.basics} profile={profile} language={language} />
      <Skills skills={resume.skills} language={language} />
      {profile === Profiles.DEV && (
        <ImageContainer>
          <Avatar />
        </ImageContainer>
      )}
      <EducationList educationList={resume.education} language={language} />
      <WorkExperience experience={resume.work} language={language} />
      <LanguageList languages={resume.languages} language={language} />
    </Container>
  );
};

export default Resume;
