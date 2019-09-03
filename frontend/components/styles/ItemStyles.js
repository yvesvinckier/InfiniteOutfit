import styled from "styled-components";

const Item = styled.div`
  background: rgba(0, 0, 0, 0.035);
  position: relative;
  display: flex;
  flex-direction: column;
  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    font-weight: 300;
    flex-grow: 1;
    font-size: 1.5rem;
    color: rgb(115, 115, 115);
    margin: 0;
  }
  .buttonList {
    
    // display: grid;
    // width: 100%;
    // border-top: 1px solid ${props => props.theme.lightgrey};
    // grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    // grid-gap: 1px;
    // & > * {
    //   border: 0;
    //   font-size: 1rem;
    //   padding: 1rem;
    // }
    button {
      cursor: pointer;
      font-size: 12px;
      line-height: 1.33341;
      font-weight: 400;
      background : ${props => props.theme.black};
      border: 0;
      text-decoration: none;
      border-radius: 12px;
      padding: 3px 11px;
      color: white;
      margin-bottom: 25px;
    }
  }
`;

export default Item;
