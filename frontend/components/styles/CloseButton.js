import styled from "styled-components";

const CloseButton = styled.button`
  background: ${props => props.theme.black};
  cursor: pointer;
  color: white;
  font-size: 3rem;
  border: 0;
  position: absolute;
  width: 40px;
  height: 40px;
  padding-bottom: 5px;
  padding-right: 7px;
  z-index: 2;
  right: 0;
`;

export default CloseButton;
