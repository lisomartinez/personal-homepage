import React from 'react';
import { Language } from '../../../domain/models/resume';
import TitleComponent from '../shared/title';
import LanguageComponent from './language';
import Accordion from '../../accordion/accordion';
import { MainContainer } from '../shared/resume.styles';
import { List } from './index.styles';
import { Languages } from '../../../utils/language';

type Props = {
  languages: Language[];
  language: string;
};

const makeHeader = (length: number, title: string) => (
  <TitleComponent>{title}</TitleComponent>
);

const LanguageList: React.FC<Props> = ({ languages, language }) => {
  const lang = language;
  const title = language === Languages.EN ? 'LANGUAGES' : 'IDIOMAS';
  return (
    <MainContainer>
      <Accordion
        header={makeHeader(languages.length, title)}
        openByDefault={true}
      >
        <List>
          {languages.map((language) => (
            <LanguageComponent
              key={language.language}
              language={language}
              lang={lang}
            />
          ))}
        </List>
      </Accordion>
    </MainContainer>
  );
};

export default LanguageList;
