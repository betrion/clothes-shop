import {
  FaGithub,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLink,
  FaLinkedinIn,
} from "react-icons/fa";
import { ContactWrapper } from "../styles/ContactWrapper.style";
const Contact = () => {
  return (
    <ContactWrapper>
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

export default Contact;
