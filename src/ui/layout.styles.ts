import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 15% 300px calc(70% - 300px) 15%;
  grid-template-rows: 50px calc(100% - 100px) 50px;
  grid-gap: 10px;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;

  @media only screen and (max-width: 1650px) {
    grid-template-columns: 10% 300px calc(80% - 300px) 10%;
    grid-gap: 0;
  }

  @media only screen and (max-width: 1200px) {
    grid-template-columns: 5% 300px calc(90% - 300px) 5%;
    grid-gap: 0;
  }

  @media only screen and (max-width: 1000px) {
    grid-template-columns: 5% 0 calc(90%) 5%;
    grid-gap: 0;
  }

  @media only screen and (max-width: 600px) {
    grid-template-columns: 0 0 calc(100%) 0;
    grid-template-rows: 5% 80% 10%;
    grid-gap: 0;
  }

  @media print {
    margin: 0;
    overflow: visible;
  }
`;
