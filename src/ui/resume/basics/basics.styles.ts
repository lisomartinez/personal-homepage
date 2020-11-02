import styled from 'styled-components';

export const Name = styled.h1`
  font-size: 3rem;
  margin: 0;
`;

export const Label = styled.h2`
  margin: 0.3rem 0 0 0;
  font-size: 2rem;
  font-weight: 400;
  font-style: italic;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
  align-items: center;
  flex-wrap: wrap;
  @media only screen and (max-width: 440px) {
    margin-bottom: 10rem;
  }
`;
