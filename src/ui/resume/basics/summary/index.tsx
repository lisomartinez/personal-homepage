import React from 'react';
import { Container } from './summary.styles';

type Props = {
  summary: string;
};

const Summary: React.FC<Props> = ({ summary }) => {
  return <Container data-testid="summary-text">{summary}</Container>;
};

export default Summary;
