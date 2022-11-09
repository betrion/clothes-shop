import styled from "styled-components";
import backGroundWave from "./images/wave.svg";
import { FaGithub } from "react-icons/fa";
import { useLocation } from "react-router-dom";
const Footer = () => {
  const location = useLocation();
  console.log(location);
  return (
    <FooterWrapper>
      {location.pathname !== "/products" && <ImgWrapper src={backGroundWave} />}
      <small>© 2022 Dean</small>
      <GithubLink
        href="https://github.com/betrion"
        target="_blank"
        rel="noopener"
      >
        <FaGithub />
      </GithubLink>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  /* padding: 1rem 0; */
  background-color: #264653;
  color: #e9c46a;
`;
const ImgWrapper = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: -100;
`;

const GithubLink = styled.a`
  display: flex;
  margin-left: 1rem;
  color: #e9c46a;
  transition: transform 0.15s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;
export default Footer;
