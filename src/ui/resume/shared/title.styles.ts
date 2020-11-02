import styled from 'styled-components';

export const Title = styled.div`
  color: ${(props) => props.theme.resume.title.color};
  font-size: ${(props) => props.theme.resume.title.fontSize};
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  cursor: pointer;

  @media only print {
    width: 100%;
  }
`;

export const TitleText = styled.div`
  flex-shrink: 0;
`;
