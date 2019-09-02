import Items from "../components/Items";
import ImageFade from "../components/ImageFade";
import styled from "styled-components";

const BcgOuter = styled.div`
  position: relative;
  height: 800px;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  overflow: hidden;
  margin-top: 100px;
  margin-bottom: 100px;
`;

const Home = props => (
  <div>
    <BcgOuter>
      <ImageFade />
    </BcgOuter>
    <Items page={parseFloat(props.query.page) || 1} />
  </div>
);

export default Home;
