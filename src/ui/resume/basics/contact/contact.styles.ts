import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: space-evenly;
  height: 2rem;
  font-size: 1.4rem;
  flex-wrap: wrap;
  margin-top: 3rem;
  margin-bottom: -4px;
`;

export const Email = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-right: 2rem;
  margin-bottom: 10px;
`;

export const Website = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 10px;
`;

export const Link = styled.a`
  color: ${(props) => props.theme.resume.linkColor};
`;

export const Icon = styled.div`
  width: 2.3rem;
`;
