import styled from "styled-components";
import {
  FaGithub,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLink,
  FaLinkedinIn,
} from "react-icons/fa";
const Contact = () => {
  return (
    <ContactWrapper>
      {" "}
      <a href="https://github.com/betrion">
        <FaGithub />
      </a>
      <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
        <FaFacebook />
      </a>
      <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
        <FaInstagram />
      </a>
      <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
        <FaTwitter />
      </a>
      <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
        <FaLinkedinIn />
      </a>
    </ContactWrapper>
  );
};

const ContactWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 6rem;
  gap: 1rem;
  padding: 3rem;
  margin-top: 3rem;
  a {
    color: ${({ theme }) => theme.colors.primary};
  }
  a:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
  a:active {
    color: ${({ theme }) => theme.colors.hover.secondary};
  }

  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.active.secondary};
`;
export default Contact;
