import { FaShoppingCart } from "react-icons/fa";
import ROUTES from "../routes/routes.json";
import { NavWrapper, NavLink, CartLink } from "../styles/NavWrapper.style";
const Nav = ({
  selectedProducts,
  showCart,
  setShowCart,
  totalPrice,
  amountInCart,
}) => {
  const handleShowCart = () => {
    setShowCart((prev) => !prev);
  };
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
          <CartLink onClick={handleShowCart}>
            <FaShoppingCart />
            <div className="badge-container">
              {selectedProducts.length > 0 && (
                <div className="badge-btn">{selectedProducts.length}</div>
              )}
            </div>
          </CartLink>
        </li>
      </ul>
    </NavWrapper>
  );
};

export default Nav;
