import { FaWindowClose, FaPlusSquare, FaMinusSquare } from "react-icons/fa";
import { CartBg, CartWrapper, ProductsContainer } from "./styles/Cart.style";
import formatTitle from "./functions/formatTitle";
const Cart = ({
  setShowCart,
  selectedProducts,
  setSelectedProducts,
  totalPrice,
  amountInCart,
  setAmountInCart,
}) => {
  const handleClose = () => {
    setShowCart((prev) => !prev);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    console.log(e.target.id);
    const targetItem = e.target.id;
    if (targetItem !== "<empty string>") {
      const filteredProducts = selectedProducts.filter(
        (cartItem) => cartItem.item.title != targetItem
      );
      setSelectedProducts(filteredProducts);
      setAmountInCart(amountInCart - 1);
    }
  };
  const handleChangeQty = (e, id) => {
    console.log(JSON.stringify(e.target.id));
  };
  const renderProducts = selectedProducts.map((product) => (
    <div key={Math.random()} className="product-card" id={product.item.id}>
      <img src={product.item.image} alt={product.item.description}></img>
      <div className="product-card-info">
        <h4>{formatTitle(product.item.title)}</h4>
        <h5>{product.item.price}$</h5>
        <button
          onClick={handleChangeQty}
          id={product.item.title}
          className="btn-change"
        >
          -
        </button>

        <small>Qty: {product.quantity} </small>
        <button onClick={handleDelete} className="btn-change">
          +
        </button>

        <button
          onClick={handleDelete}
          id={product.item.title}
          className="btn-delete"
        >
          X
        </button>
      </div>
    </div>
  ));
  return (
    <CartBg>
      <CartWrapper>
        <FaWindowClose className="close-btn" onClick={handleClose} />
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
