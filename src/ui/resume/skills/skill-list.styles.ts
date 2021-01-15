import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const SkillList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-left: ${(props) => props.theme.resume.section.marginLeft};
  margin-top: ${(props) => props.theme.resume.section.marginTop};

  @media only print {
    margin-top: 3rem;
  }
`;

export const SkillNumber = styled.span`
  font-size: 0.7em;
`;
