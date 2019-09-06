import styled, { keyframes } from "styled-components";

const loading = keyframes`
  from {
    background-position: 0 0;
    /* rotate: 0; */
  }

  to {
    background-position: 100% 100%;
    /* rotate: 360deg; */
  }
`;

const Form = styled.form`
  margin-top: 80px;
  margin-bottom: 80px;
  background: rgba(0, 0, 0, 0.02);
  padding: 60px;
  label {
    display: block;
    margin-bottom: 2rem;
  }
  input,
  textarea,
  select {
    width: 100%;
    padding: 0.5rem;
    font-size: 1.2rem;
    box-shadow: none;
    font-weight: 400;
    outline: none;
    font-family: "Montserrat", sans-serif;
    border: 1px solid ${props => props.theme.lightgrey};
    color: ${props => props.theme.grey};
    &:focus {
      outline: 0;
      border-color: ${props => props.theme.grey};
    }
  }
  button,
  input[type="submit"] {
    margin-top: 40px;
    width: auto;
    background: ${props => props.theme.red};
    letter-spacing: 1.8px;
    text-transform: uppercase;
    color: white;
    border: 0;
    font-size: 1.6rem;
    font-weight: 600;
    padding: 1rem 2rem;
  }
  fieldset {
    border: 0;
    padding: 0;
    font-size: 1.4rem;
    font-weight: 400;
    &[disabled] {
      opacity: 0.5;
    }
    &[aria-busy="true"]::before {
      background-size: 50% auto;
      animation: ${loading} 0.5s linear infinite;
    }
  }
`;

export default Form;
