import React from 'react';
import styled from 'styled-components';
import { Education } from '../../../domain/models/resume';
import EducationItem from './education-item';
import { MainContainer } from '../shared/resume.styles';
import Accordion from '../../accordion/accordion';
import TitleComponent from '../shared/title';
import { Languages } from '../../../utils/language';

const Container = styled.section`
  display: flex;
  flex-direction: row;
`;

const ItemList = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-left: ${(props) => props.theme.resume.section.marginLeft};
  margin-top: ${(props) => props.theme.resume.section.marginTop};
  margin-right: 15rem;

  @media only screen and (max-width: 1450px) {
    margin-right: 5rem;
  }

  @media only screen and (max-width: 1100px) {
    margin-right: 0rem;
  }

  @media only print {
    margin-right: 0;
  }
`;

const makeHeader = (length: number, language: string) => {
  const education = language === Languages.EN ? 'EDUCATION' : 'EDUCACIÓN';
  return <TitleComponent> {education}</TitleComponent>;
};

type Props = {
  educationList: Education[];
  language: string;
};

const EducacionList: React.FC<Props> = ({ educationList, language }) => {
  return (
    <MainContainer>
      <Accordion
        header={makeHeader(educationList.length, language)}
        openByDefault={true}
      >
        <ItemList>
          {educationList.map((education: Education) => (
            <EducationItem key={education.studyType} education={education} />
          ))}
        </ItemList>
      </Accordion>
    </MainContainer>
  );
};

export default EducacionList;
