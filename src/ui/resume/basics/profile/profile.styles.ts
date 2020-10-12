import styled from 'styled-components';

export const Container = styled.article`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-content: center;
  align-items: center;
  height: 2rem;
  margin-right: 2rem;
  font-size: 1rem;
`;

export const Network = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-content: center;
  align-items: center;
  margin-right: 0.5rem;
`;

export const Link = styled.a`
  font-size: 1.3rem;

  color: ${(props) => props.theme.resume.linkColor};
`;
