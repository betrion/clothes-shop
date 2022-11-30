import { FaWindowClose } from "react-icons/fa";
import { CartBg, CartWrapper, ProductsContainer } from "./styles/Cart.style";
import formatTitle from "./functions/formatTitle";
const Cart = ({
  setShowCart,
  selectedProducts,
  setSelectedProducts,
  totalPrice,
}) => {
  const handleClose = () => {
    setShowCart((prev) => !prev);
  };

  const handleDelete = () => {
    console.log("delete");
  };
  const renderProducts = selectedProducts.map((product) => (
    <div key={Math.random()} className="product-card">
      <img src={product.item.image} alt={product.item.description}></img>
      <div className="product-card-info">
        <h4>{formatTitle(product.item.title)}</h4>
        <h5>{product.item.price}$</h5>
        <small>Qty: {product.quantity} </small>
        <FaWindowClose onClick={handleDelete} className="btn-interactive" />
      </div>
    </div>
  ));
  return (
    <CartBg>
      <FaWindowClose className="close-btn" onClick={handleClose} />
      <CartWrapper>
        {renderProducts.length === 0 && (
          <div>
            <h1>Nothing in cart yet...</h1>
          </div>
        )}
        {renderProducts && (
          <ProductsContainer>
            {renderProducts}
            <h4 className="price-display">Total price: {totalPrice} $</h4>
          </ProductsContainer>
        )}
      </CartWrapper>
    </CartBg>
  );
};
export default Cart;
