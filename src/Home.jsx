import styled from "styled-components";
import Hero from "./images/hero.jpg";
import { Link } from "react-router-dom";
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

const HomeWrapper = styled.div`
  display: flex;
  animation: fadeIn ease 2s;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  /* gap: 1rem; */
  padding: 3rem 0;
  & h1 {
    font-size: 2rem;
    font-weight: 900;
  }

  @media (max-width: 750px) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
`;
const StoreParole = styled.p`
  color: #a6a6a5;
  font-weight: 900;
  letter-spacing: 4px;
`;
const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const RightColumn = styled.div`
  & img {
    /* height: auto; */
    animation: fadeIn ease 2s;
    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 0.7;
      }
    }
    opacity: 0.7;
    height: 600px;
    width: 1200px;
    object-fit: cover;
    object-position: 10% 70%;
    filter: blur(2px);
    border-radius: 12px;
    overflow: hidden;
  }
  @media (max-width: 750px) {
    & img {
      display: absolute;
      z-index: -1;
      width: 100%;
      opacity: 0.4;
      animation: none;
    }
  } ;
`;
export default Home;
