import React from 'react';

import { Skill as SkillModel } from '../../../domain/models/resume';
import Accordion from '../../accordion/accordion';
import Skill from './skill/skill';
import TitleComponent from '../shared/title';
import { SkillList } from './skill-list.styles';
import { MainContainer } from '../shared/resume.styles';

type Props = {
  skills: SkillModel[];
  language: string;
};

const makeHeader = (length: number) => <TitleComponent>SKILLS</TitleComponent>;

const Skills: React.FC<Props> = ({ skills, language }) => {
  return (
    <MainContainer>
      <Accordion header={makeHeader(skills.length)} openByDefault={true}>
        <SkillList>
          {skills.map((skill) => (
            <Skill key={skill.name} skill={skill} language={language} />
          ))}
        </SkillList>
      </Accordion>
    </MainContainer>
  );
};

export default Skills;
