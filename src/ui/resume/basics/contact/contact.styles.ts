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
  margin-top: 6rem;
  margin-bottom: -4px;

  @media only screen and (max-width: 440px) {
    margin-top: 4rem;
    margin-bottom: 0;
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  align-items: center;
  margin-bottom: 10px;
  margin-right: 1rem;

  @media only screen and (max-width: 440px) {
    font-size: 1.6rem;
  }
`;

export const Email = styled(Item)`
  margin-right: 2rem;
`;

export const Website = styled(Item)`
  margin-right: 2rem;
`;

export const Phone = styled(Item)`
  @media only screen and (max-width: 440px) {
    width: auto;
  }
  width: 100%;
  margin-bottom: 2rem;
`;

export const Link = styled.a`
  color: ${(props) => props.theme.resume.linkColor};
`;

export const Icon = styled.div`
  width: 2.3rem;
  margin-right: 2rem;
`;
