import React from 'react';
import { GetStaticProps } from 'next';
import fs from 'fs';
import path from 'path';
import { Resume } from '../domain/models/resume';
import ResumeComponent from '../ui/resume';
import matter from 'gray-matter';

type Props = {
  resume: Resume;
};

const ResumePage: React.FC<Props> = ({ resume }) => {
  // console.log('resume', resume);
  return <ResumeComponent resume={resume} />;
};

export default ResumePage;

// export const getStaticProps: GetStaticProps = async () => {
//   const resumeJson = await fs.promises.readFile(path.join('data/resume.json'));
//
//   const content: Resume = JSON.parse(resumeJson.toString());
//
//   return {
//     props: {
//       resume: content,
//     },
//   };
// };

export const getStaticProps: GetStaticProps = async () => {
  const resumeYaml = await fs.promises.readFile(path.join('data/resume.yaml'));

  const content: Resume = matter(resumeYaml.toString()).data as Resume;

  return {
    props: {
      resume: content,
    },
  };
};
