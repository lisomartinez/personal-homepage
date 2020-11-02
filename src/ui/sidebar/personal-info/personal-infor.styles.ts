import styled from 'styled-components';

export const InfoContainer = styled.article`
  grid-area: info;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

export const ShortDescription = styled.div`
  font-size: 1.5rem;
  font-family: 'Open Sans', Georgia, serif;
  margin-bottom: 0;
  font-weight: 300;
`;

export const Name = styled.h1`
  font-size: 3rem;
  font-family: 'Playfair Display', Georgia, serif;
  margin-bottom: 0;
`;
