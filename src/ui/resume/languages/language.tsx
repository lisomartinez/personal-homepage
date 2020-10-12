import React from 'react';
import { Language } from '../../../domain/models/resume';
import ProgressItem from '../shared/progress-bar/progress-item';
import { Container } from './language.styles';

type Props = {
  language: Language;
};

const LanguageComponent: React.FC<Props> = ({ language }) => {
  return (
    <Container>
      <ProgressItem level={language.fluency} name={language.language} />
    </Container>
  );
};

export default LanguageComponent;
