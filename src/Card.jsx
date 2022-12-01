import { CardWrapper } from "./styles/Card.style";
import titleFormat from "./functions/formatTitle";
import { useState } from "react";
import { useEffect } from "react";
const Card = ({
  item,
  items,
  selectedProducts,
  setSelectedProducts,
  amountInCart,
  setAmountInCart,
  totalPrice,
  setTotalPrice,
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

  const handleDelete = () => {
    const filteredProducts = selectedProducts.filter(
      (cartItem) => cartItem.title !== item.title
    );
    setSelectedProducts(filteredProducts);
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
