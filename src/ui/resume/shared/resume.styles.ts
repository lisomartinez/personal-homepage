import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3rem;

  @media only screen and (max-width: 440px) {
    margin: 3rem 0 0 0;
  }

  @media only print {
    margin: 1rem 0 0 0;
  }
`;
