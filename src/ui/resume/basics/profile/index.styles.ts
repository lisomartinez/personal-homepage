import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: center;
  padding-top: 3rem;
  margin-bottom: 2rem;

  @media only screen and (max-width: 440px) {
    height: 100%;
    padding-top: 1rem;
    margin-bottom: 0;
    font-size: 1.6rem;
    flex-direction: column;
  }
`;
