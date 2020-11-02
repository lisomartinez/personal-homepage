import styled from 'styled-components';

export const ImageContainer = styled.div`
  grid-area: image;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;

  @media only print {
    position: absolute;
    top: 10px;
    right: 25px;
  }
`;

export const Image = styled.img`
  width: 15rem;
  height: 15rem;
  border-radius: 50%;
  @media only print {
    width: 18rem;
    height: 18rem;
  }
`;
