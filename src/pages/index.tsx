import React from 'react';
import { GetStaticProps } from 'next';
import fs from 'fs';
import path from 'path';
import { Resume } from '../domain/models/resume';
import ResumeComponent from '../ui/resume';
import matter from 'gray-matter';
import { Languages } from '../utils/language';

type Props = {
  resume: Resume;
  profile: string;
  language: string;
};

const ResumePage: React.FC<Props> = ({ resume, profile, language }) => {
  return (
    <ResumeComponent resume={resume} profile={profile} language={language} />
  );
};

export default ResumePage;

export const getStaticProps: GetStaticProps = async () => {
  const language = process.env.LANGUAGE;
  let file = '';
  if (language === Languages.EN) {
    file = 'data/resume.en.yaml';
  } else {
    file = 'data/resume.yaml';
  }
  const resumeYaml = await fs.promises.readFile(path.join(file));

  const content: Resume = matter(resumeYaml.toString()).data as Resume;
  const profile = process.env.PROFILE;
  return {
    props: {
      resume: content,
      profile: profile,
      language: language,
    },
  };
};
