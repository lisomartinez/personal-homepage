import styled from 'styled-components';

export const Container = styled.article`
  margin-right: 4rem;
  margin-left: 0;
`;

export const Keyword = styled.ul`
  background-color: #dfeaf1;
  color: #255088;
  padding: 0.4rem;
  margin: 0.5rem 0.5rem 0.5rem 0;
  box-shadow: 0.3px 0.3px 0.3px 0.3px rgba(0, 0, 255, 0.2);
`;

export const KeywordList = styled.ul`
  display: flex;
  flex-direction: row;
  padding: 0;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
  flex-wrap: wrap;
  width: 15rem;
`;

export type BarWidth = {
  width: string;
};

export const LevelBar = styled.div<BarWidth>`
  width: ${(props: BarWidth) => props.width};
  height: ${(props) => props.theme.resume.skill.progressBar.height};
`;

export const Name = styled.h2`
  font-size: ${(props) => props.theme.resume.skill.title.fontSize};
`;

export const LevelStyle = styled.div`
  font-style: italic;
`;
