import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
const Nav = (props) => {
  return (
    <NavWrapper>
      <h1>ClothesStore</h1>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/products">Products</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/cart">
            <FaShoppingCart />
            <h6>1</h6>
          </NavLink>
        </li>
      </ul>
    </NavWrapper>
  );
};

const NavWrapper = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.dark};
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 1rem 2rem;
  font-size: 2rem;
  flex-wrap: nowrap;

  h1 {
    color: ${({ theme }) => theme.colors.active.secondary};
    font-size: 4rem;
    text-decoration: underline;
    text-decoration-color: ${({ theme }) => theme.colors.secondary};
  }
  ul {
    display: flex;
    list-style: none;
    gap: 1rem;
  }
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const NavLink = styled(Link)`
  padding: 1rem;

  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  display: flex;

  transition: transform 0.15s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
    transform: scale(1.2);
  }
  &:active {
    color: ${({ theme }) => theme.colors.active.secondary};
  }

  h6 {
    color: red;
    position: relative;
    right: 32px;
    top: 20px;
    background-color: ${({ theme }) => theme.colors.active.secondary};
    font-size: 1rem;
    padding: 0;
  }
`;
export default Nav;
