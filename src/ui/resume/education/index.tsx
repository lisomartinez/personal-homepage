import React from 'react';
import styled from 'styled-components';
import { Education } from '../../../domain/models/resume';
import EducationItem from './education-item';
import { MainContainer } from '../shared/resume.styles';
import Accordion from '../../accordion/accordion';
import TitleComponent from '../shared/title';

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
`;

const makeHeader = (length: number) => (
  <TitleComponent>EDUCACIÓN</TitleComponent>
);

type Props = {
  educationList: Education[];
};

const EducacionList: React.FC<Props> = ({ educationList }) => {
  return (
    <MainContainer>
      <Accordion header={makeHeader(educationList.length)} openByDefault={true}>
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
