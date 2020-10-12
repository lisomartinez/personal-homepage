import styled from 'styled-components';

export const ImageContainer = styled.div`
  grid-area: image;
  display: flex;
  flex-direction: column;
  //justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  //width: 100%;
  //height: 100vh;
`;

export const Image = styled.div`
  border: 1px solid black;
  border-radius: 50%;
  width: 15rem;
  height: 15rem;
`;
