import styled from "styled-components";

const PriceTag = styled.span`
  font-weight: 400;
  padding: 5px;
  margin-top: 30px;
  margin-bottom: 20px;
  line-height: 1.42;
  font-size: 1.4rem;
  display: inline-block;
  color: ${props => props.theme.black};
`;

export default PriceTag;
