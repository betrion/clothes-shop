import { FaWindowClose, FaPlusSquare, FaMinusSquare } from "react-icons/fa";
import { CartBg, CartWrapper, ProductsContainer } from "./styles/Cart.style";
import formatTitle from "./functions/formatTitle";
import { act } from "react-dom/test-utils";
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
  const handleChangeQty = (e) => {
    const action = e.target.dataset.action;
    const currentProduct = e.target.id;
    console.log(action);

    selectedProducts.forEach((element) => {
      console.log(Number(element.item.id) === Number(currentProduct));
      if (Number(element.item.id) === Number(currentProduct)) {
        if (action === "minus") {
          element.quantity -= 1;
          setAmountInCart(amountInCart - 1);
        }
        if (action === "plus") {
          element.quantity += 1;
          setAmountInCart(amountInCart + 1);
        }
        if (element.quantity === 0) {
          const filteredProducts = selectedProducts.filter(
            (cartItem) => cartItem != element
          );
          setSelectedProducts(filteredProducts);
        }
      }
    });
  };

  const renderProducts = selectedProducts.map((product) => (
    <div key={Math.random()} className="product-card" id={product.item.id}>
      <img src={product.item.image} alt={product.item.description}></img>
      <div className="product-card-info">
        <h4>{formatTitle(product.item.title)}</h4>
        <h5>{product.item.price}$</h5>
        <button
          onClick={handleChangeQty}
          id={product.item.id}
          className="btn-change"
          data-action="minus"
        >
          -
        </button>

        <small>Qty: {product.quantity} </small>
        <button
          onClick={handleChangeQty}
          className="btn-change"
          data-action="plus"
          id={product.item.id}
        >
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
