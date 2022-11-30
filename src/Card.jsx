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

  // setSelectedProducts([item]);

  //   if (selectedProducts.length === 0) {
  //     setSelectedProducts([{ ...item, quantity: item.quantity + 1 }]);
  //   } else {
  //     const tempArr = selectedProducts.map((product) => {
  //       if (product.title === item.title) {
  //         return { ...product, quantity: product.quantity + 1 };
  //       } else if (product.title !== item.title) {
  //         return item;
  //       }
  //       return tempArr;
  //     });
  //     // setSelectedProducts((prev) => [
  //     //   ...prev,
  //     //   { ...item, quantity: item.quantity + 145 },
  //     // ]);
  //     setSelectedProducts(tempArr);
  //   }

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
        <h5>{item.price}$</h5>
        {item.quantity > 0 && <small> item quantity:{item.quantity}</small>}
        <button onClick={handleAddToCart}>Add to cart</button>
        {selectedProducts.includes(item) && (
          <button onClick={handleDelete}>Delete</button>
        )}
      </div>
    </CardWrapper>
  );
};

export default Card;
