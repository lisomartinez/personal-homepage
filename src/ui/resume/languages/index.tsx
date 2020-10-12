import React from 'react';
import { Language } from '../../../domain/models/resume';
import TitleComponent from '../shared/title';
import LanguageComponent from './language';
import Accordion from '../../accordion/accordion';
import { MainContainer } from '../shared/resume.styles';
import { List } from './index.styles';

type Props = {
  languages: Language[];
};

const makeHeader = (length: number) => <TitleComponent>IDIOMAS</TitleComponent>;

const LanguageList: React.FC<Props> = ({ languages }) => {
  return (
    <MainContainer>
      <Accordion header={makeHeader(languages.length)} openByDefault={true}>
        <List>
          {languages.map((language) => (
            <LanguageComponent key={language.language} language={language} />
          ))}
        </List>
      </Accordion>
    </MainContainer>
  );
};

export default LanguageList;
