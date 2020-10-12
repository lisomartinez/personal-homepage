import styled from 'styled-components';

export const Content = styled.main`
  grid-column: 3 /3;
  grid-row: 2 / 2;
  width: 100%;
  height: 100%;
  background-color: white;
  @media only print {
    grid-column: 1/3;
    grid-row: 1/2;
    width: 100vw;
  }
`;
