import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import ROUTES from "../routes/routes.json";
const Nav = ({ selectedProducts }) => {
  return (
    <NavWrapper>
      <h1>OnlineShop</h1>
      <ul>
        <li>
          <NavLink to={ROUTES.HOME}>Home</NavLink>
        </li>
        <li>
          <NavLink to={ROUTES.PRODUCTS}>Products</NavLink>
        </li>
        <li>
          <NavLink to={ROUTES.CONTACT}>Contact</NavLink>
        </li>
        <li>
          <NavLink to="/cart">
            <FaShoppingCart />
            <div className="badge-container">
              {selectedProducts.length > 0 && (
                <div className="badge-btn">{selectedProducts.length}</div>
              )}
            </div>
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
  /* gap: 1rem; */
  padding: 1rem 2rem;
  font-size: 2rem;
  flex-wrap: wrap;
  h1 {
    flex-basis: auto;
    color: ${({ theme }) => theme.colors.active.secondary};
    font-size: 4rem;
    text-decoration: underline;
    text-decoration-color: ${({ theme }) => theme.colors.secondary};
  }
  ul {
    flex-basis: auto;

    display: flex;
    list-style: none;
    gap: 1rem;
  }
  @media (max-width: 550px) {
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
  & .badge-container {
    position: relative;
  }

  & .badge-btn {
    color: ${({ theme }) => theme.colors.secondary};
    top: 1.5rem;
    right: -10px;
    border-radius: 25%;
    position: absolute;
    font-size: 14px;
    font-weight: 900;
    padding: 1px 3px;
    background-color: ${({ theme }) => theme.colors.active.secondary};
  }
`;
export default Nav;
