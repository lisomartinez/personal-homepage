import styled from 'styled-components';

export const Container = styled.article`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-content: center;
  align-items: center;
  height: 100%;
  margin-right: 2rem;
  font-size: 1rem;

  @media only screen and (max-width: 440px) {
    margin-bottom: 1.6rem;
  }
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

  @media only screen and (max-width: 440px) {
    margin-bottom: 1.4rem;
    font-size: 1.6rem;
  }
`;
