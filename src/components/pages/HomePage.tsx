import { Container } from "..";
import Header from "../Header/Header";

const HomePage = () => {
  return (
    <Container>
      <Header />
      <Container isInnerContainer></Container>
    </Container>
  );
};

export default HomePage;
