import Hero from "./images/hero.jpg";
import { Link } from "react-router-dom";
import {
  HomeWrapper,
  LeftColumn,
  StoreParole,
  RightColumn,
} from "./styles/Home.style";
const Home = () => {
  return (
    <HomeWrapper>
      <LeftColumn>
        <StoreParole>BEST ONLINE STORE ON THE WEB</StoreParole>
        <h1>Start shopping with your favorite store!</h1>
        <Link to="/products">
          <button>Start shopping</button>
        </Link>
      </LeftColumn>
      <RightColumn>
        <img src={Hero} alt="Hero" />
      </RightColumn>
    </HomeWrapper>
  );
};

export default Home;
