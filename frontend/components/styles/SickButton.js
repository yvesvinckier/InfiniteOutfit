import styled from "styled-components";

const SickButton = styled.button`
  background: rgb(228, 37, 37);
  color: white;
  font-weight: 500;
  border: 0;
  border-radius: 0;
  text-transform: uppercase;
  font-size: 1.4rem;
  padding: 1rem 3rem;
  display: inline-block;
  letter-spacing: 1.8px;
  transition: all 0.5s;
  &[disabled] {
    opacity: 0.5;
  }
`;

export default SickButton;
