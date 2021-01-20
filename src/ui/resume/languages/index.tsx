import React from 'react';
import { Language } from '../../../domain/models/resume';
import TitleComponent from '../shared/title';
import LanguageComponent from './language';
import Accordion from '../../accordion/accordion';
import { List } from './index.styles';
import { Languages } from '../../../utils/language';
import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;

  @media only screen and (max-width: 440px) {
    margin: 3rem 0 0 0;
  }

  @media only print {
    margin: 10px 0 0 0;
  }
`;

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
