import React from 'react';
import { Container } from './summary.styles';

type Props = {
  summary: string;
};

const Summary: React.FC<Props> = ({ summary }) => {
  return <Container>{summary}</Container>;
};

export default Summary;
