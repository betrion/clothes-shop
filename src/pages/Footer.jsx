import styled from "styled-components";
import backGroundWave from "../images/wave.svg";
import { FaGithub } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import ROUTES from "../routes/routes.json";
const Footer = () => {
  const location = useLocation();
  return (
    <FooterWrapper>
      {location.pathname !== ROUTES.PRODUCTS && (
        <ImgWrapper src={backGroundWave} />
      )}

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
  position: fixed;
  bottom: 0px;
  left: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  /* padding: 1rem 0; */
  background-color: #264653;
  color: #e9c46a;

  overflow: hidden;
`;
const ImgWrapper = styled.img`
  position: fixed;
  bottom: 20px;
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
