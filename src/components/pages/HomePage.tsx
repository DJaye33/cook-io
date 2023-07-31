import { Container } from "..";
import Header from "../Header/Header";
import OptionsButtonGroup from "../OptionsButtonGroup/OptionsButtonGroup";

const HomePage = () => {
  return (
    <Container>
      <Header />
      <Container isInnerContainer>
        <OptionsButtonGroup />
      </Container>
    </Container>
  );
};

export default HomePage;
