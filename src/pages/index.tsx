import React from 'react';
import { GetStaticProps } from 'next';
import fs from 'fs';
import path from 'path';
import { Resume } from '../domain/models/resume';
import ResumeComponent from '../ui/resume';
import matter from 'gray-matter';

type Props = {
  resume: Resume;
  profile: string;
};

const ResumePage: React.FC<Props> = ({ resume, profile }) => {
  return <ResumeComponent resume={resume} profile={profile} />;
};

export default ResumePage;

export const getStaticProps: GetStaticProps = async () => {
  const resumeYaml = await fs.promises.readFile(path.join('data/resume.yaml'));
  const content: Resume = matter(resumeYaml.toString()).data as Resume;

  const profile = process.env.PROFILE;

  return {
    props: {
      resume: content,
      profile: profile,
    },
  };
};
