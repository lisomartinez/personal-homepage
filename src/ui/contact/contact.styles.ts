import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

export const Label = styled.label`
  margin-bottom: 0.7rem;
  font-size: 1.3rem;
  font-weight: bold;
  font-family: 'Open Sans', sans-serif;
`;

type TextProps = {
  tabIndex: number;
};

export const Input = styled.input<TextProps>`
  height: 3rem;
  border-radius: 25px;
  border: 1px solid black;
`;

export const TextInput = styled(Input)`
  width: 26rem;
`;

export const PhoneInput = styled(Input)`
  width: 20rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

export const SendButton = styled.button`
  display: inline-block;
  padding: 1rem 3em;
  font-size: 2rem;
  border: 2px solid ${(props) => (props.disabled ? 'gray' : 'black')};
  margin: 0 0.3rem 0.3rem 0;
  border-radius: 20px;
  box-sizing: border-box;
  text-decoration: none;
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  color: ${(props) => (props.disabled ? 'gray' : 'black')};
  text-align: center;
  transition: all 0.2s;
  background-color: white;

  &:hover {
    color: ${(props) => (props.disabled ? 'gray' : 'white')};
    background-color: ${(props) => (props.disabled ? 'white' : 'black')};
  }
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: flex-start;
  align-items: flex-start;
  margin-top: 3rem;
  width: 100%;
`;

export const Container = styled.div`
  height: 100%;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #faf3f7;
  margin-left: 4rem;
  @media only screen and (max-width: 1200px) {
    margin-top: 10px;
  }

  @media only screen and (max-width: 1650px) {
    margin-top: 10px;
  }

  @media only screen and (max-width: 1100px) {
    margin-top: 10px;
  }
`;

export const ContactOptions = styled.section`
  display: flex;
  height: 100%;
  flex-direction: column;

  @media only screen and (max-width: 1200px) {
    margin-top: 20px;

    padding-left: 5rem;
    padding-right: 5rem;
  }

  @media only screen and (max-width: 1650px) {
    margin-top: 20px;

    padding-left: 6rem;
    padding-right: 6rem;
  }

  @media only screen and (max-width: 1100px) {
    margin-top: 20px;
    padding-left: 3rem;
    padding-right: 3rem;
  }

  @media only screen and (max-width: 800px) {
    padding-left: 10rem;
    padding-right: 10rem;
  }

  @media only screen and (max-width: 400px) {
    padding-left: 0;
    padding-right: 0;
  }

  padding-left: 10rem;
  padding-right: 10rem;
`;

export const Social = styled.article`
  margin-top: 2rem;
  width: 100%;
  height: 10rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

export const Network = styled.div`
  margin-left: 2rem;
  margin-right: 2rem;
`;

export const Separator = styled.div`
  height: 3px;
  width: 100%;
  border-bottom: 3px solid black;
  opacity: 0.3;
  margin: 2rem 1rem;
`;

export const SeparatorBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 2rem;
`;
