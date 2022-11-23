import PropTypes from "prop-types";
import { useState } from "react";
import { CardWrapper } from "./styles/Card.style";
import titleFormat from "./functions/formatTitle";
const Card = ({ item, selectedProducts, setSelectedProducts }) => {
  const handleAddToCart = (id, effect) => {
    console.log(id, effect);
  };
  return (
    <CardWrapper>
      <div key={item.id} id={item.id}>
        <img src={item.image} alt={item.description} />
        <h4>{titleFormat(item.title)}</h4>
        <h5>{item.price}$</h5>
        <button onClick={handleAddToCart}>Add to cart</button>
      </div>
    </CardWrapper>
  );
};
Card.propTypes = {
  item: PropTypes.object,
};
export default Card;
