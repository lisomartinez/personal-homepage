import React from 'react';
import { Language } from '../../../domain/models/resume';
import ProgressItem from '../shared/progress-bar/progress-item';
import { Container } from './language.styles';

type Props = {
  language: Language;
  lang: string;
};

const LanguageComponent: React.FC<Props> = ({ language, lang }) => {
  return (
    <Container>
      <ProgressItem
        level={language.fluency}
        name={language.language}
        language={lang}
      />
    </Container>
  );
};

export default LanguageComponent;
