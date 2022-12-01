import { CardWrapper } from "./styles/Card.style";
import titleFormat from "./functions/formatTitle";
const Card = ({
  item,
  selectedProducts,
  setSelectedProducts,
  amountInCart,
  setAmountInCart,
}) => {
  const handleAddToCart = (e) => {
    let isInCart = false;
    if (selectedProducts.length > 0)
      selectedProducts.forEach((element) => {
        if (element.item.title === item.title) {
          element.quantity += 1;
          isInCart = true;
          setAmountInCart(amountInCart + 1);
        }
      });
    if (!isInCart) {
      setSelectedProducts([...selectedProducts, { item: item, quantity: 1 }]);
      setAmountInCart(amountInCart + 1);
    }
  };

  return (
    <CardWrapper>
      <div key={item.id} id={item.id} name={item.title}>
        <img src={item.image} alt={item.description} />
        <h4>{titleFormat(item.title)}</h4>
        <h5>{item.price} $</h5>
        <button onClick={handleAddToCart}>Add to cart</button>
      </div>
    </CardWrapper>
  );
};

export default Card;
