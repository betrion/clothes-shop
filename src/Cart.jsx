import { useState } from "react";
import styled from "styled-components";
import { CartBg, CartWrapper, ProductsContainer } from "./styles/Cart.style";
const Cart = ({ selectedProducts, setSelectedProducts }) => {
  const renderProducts = selectedProducts.map((product) => (
    <div key={product.id}>
      <img src={product.image} alt={product.description}></img>
      <h4>{product.title}</h4>
      <h6>{product.price}$</h6>
      <small>{product.quantity}</small>
    </div>
  ));
  return (
    <CartBg>
      <CartWrapper>
        {renderProducts && (
          <ProductsContainer>{renderProducts}</ProductsContainer>
        )}
        {!renderProducts && (
          <div>
            <h1>Nothing in cart yet...</h1>
          </div>
        )}
      </CartWrapper>
    </CartBg>
  );
};
export default Cart;
