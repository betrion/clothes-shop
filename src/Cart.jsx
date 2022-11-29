import { useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import styled from "styled-components";
import { CartBg, CartWrapper, ProductsContainer } from "./styles/Cart.style";
const Cart = ({ setShowCart, selectedProducts, setSelectedProducts }) => {
  const handleClose = () => {
    setShowCart((prev) => !prev);
  };
  const renderProducts = selectedProducts.map((product) => (
    <div key={Math.random()}>
      <img src={product.item.image} alt={product.item.description}></img>
      <h4>{product.item.title}</h4>
      <h6>{product.item.price}$</h6>
      <small>Qty: {product.quantity} </small>
      <FaWindowClose
        style={{ color: "red", margin: "auto", display: "inline" }}
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
          <ProductsContainer>{renderProducts}</ProductsContainer>
        )}
      </CartWrapper>
    </CartBg>
  );
};
export default Cart;
