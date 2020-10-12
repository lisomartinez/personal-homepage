import React from 'react';
import * as fs from 'fs';
import { GetStaticPaths, GetStaticProps } from 'next';
import path from 'path';
import styled from 'styled-components';

interface Project {
  title: string;
  description: string;
  image: string;
}

type Props = {
  slug: string;
  contents: Project;
};

const StyledDiv = styled.div`
  h2 {
    font-size: 4rem;
  }
`;

const Page: React.FC<Props> = (props: Props) => {
  console.log('props', props);
  return <div>{props.contents.title}</div>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync('data/projects');
  console.log('files: ', files);
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.json', ''),
    },
  }));
  console.log('paths: ', paths);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params: { slug } }) => {
  console.log('slug', slug);
  const contentString = fs
    .readFileSync(path.join('data/projects/', slug + '.json'))
    .toString();

  const content: Project = JSON.parse(contentString);

  return {
    props: {
      slug: slug,
      contents: content,
    },
  };
};

export default Page;
