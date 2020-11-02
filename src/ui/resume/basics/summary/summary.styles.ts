import styled from 'styled-components';

export const Container = styled.div`
  padding: 1rem;
  background-color: ${(props) =>
    props.theme.resume.basics.summary.backgroundColor};
  font-size: ${(props) => props.theme.resume.basics.summary.fontSize};
  line-height: ${(props) => props.theme.resume.basics.summary.lineHeight};
  font-family: ${(props) => props.theme.resume.basics.summary.fontFamily};
  font-weight: 400;

  @media only screen and (max-width: 440px) {
    font-size: 2rem;
    line-height: 3rem;
    margin-top: 2em;
    padding-bottom: 13rem;
  }

  @media only print {
    margin-top: 1rem;
  }
`;
