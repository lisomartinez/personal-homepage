import styled from 'styled-components';

export const Container = styled.article`
  margin-top: 2rem;
  margin-left: ${(props) => props.theme.resume.section.marginLeft};
  font-size: ${(props) => props.theme.resume.fontSize};

  @media only print {
    margin-top: 10px;
  }
`;

export const Website = styled.a`
  color: ${(props) => props.theme.resume.linkColor};
`;

export const Summary = styled.div`
  margin: 1rem;
  @media only print {
    margin-top: 10px;
  }
`;

export const HighlightList = styled.ul`
  margin: 1rem;
`;

export const HighlightItem = styled.li`
  margin-bottom: 1em;
`;
