import { FaWindowClose } from "react-icons/fa";
import { CartBg, CartWrapper, ProductsContainer } from "./styles/Cart.style";
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
    <div key={Math.random()}>
      <img src={product.item.image} alt={product.item.description}></img>
      <h4>{product.item.title}</h4>
      <h6>{product.item.price}$</h6>
      <small>Qty: {product.quantity} </small>
      <FaWindowClose
        onClick={handleDelete}
        style={{
          color: "red",
          margin: "auto",
          display: "inline",
          cursor: "pointer",
        }}
      />
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
            <h6>Total price: {totalPrice}</h6>
          </ProductsContainer>
        )}
      </CartWrapper>
    </CartBg>
  );
};
export default Cart;
