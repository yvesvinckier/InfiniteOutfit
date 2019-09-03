import styled from "styled-components";

const Title = styled.h3`
  text-align: center;
  margin: 0;
  margin-top: 20px;
  a {
    display: inline;
    font-size: 12px;
    letter-spacing: 2px;
    text-align: center;
    text-transform: uppercase;
    font-weight: 600;
    color: ${props => props.theme.black};
  }
`;

export default Title;
