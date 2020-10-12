import React from 'react';
import { Skill as SkillModel } from '../../../../domain/models/resume';
import { Container, Keyword, KeywordList } from './skill.styles';
import ProgressItem from '../../shared/progress-bar/progress-item';

type Props = {
  skill: SkillModel;
};

const Skill: React.FC<Props> = ({ skill }) => {
  return (
    <Container>
      <ProgressItem level={skill.level} name={skill.name} />
      <KeywordList>
        {skill.keywords.map((s) => (
          <Keyword key={s}>{s}</Keyword>
        ))}
      </KeywordList>
    </Container>
  );
};

export default Skill;
