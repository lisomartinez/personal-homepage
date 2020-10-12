import styled from 'styled-components';

export const Container = styled.article`
  margin-left: ${(props) => props.theme.resume.section.marginLeft};
  margin-right: 2rem;
  margin-top: ${(props) => props.theme.resume.section.marginTop};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
