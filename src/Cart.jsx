import styled from "styled-components";

const Cart = ({ selectedProducts, setSelectedProducts }) => {
  const renderProducts = selectedProducts.map((product) => (
    <div key={product.id}>
      <img src={product.image} alt={product.description}></img>
      <h4>{product.title}</h4>
      <small>{product.price}</small>
    </div>
  ));
  return (
    <CartBg>
      <CartWrapper>
        <ProductsContainer>{renderProducts}</ProductsContainer>
      </CartWrapper>
    </CartBg>
  );
};

const CartBg = styled.div`
  position: absolute;
  z-index: 111;
  height: 100vh;
  width: 100vw;
  background-color: grey;
  animation: fadeIn ease 1s;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 0.5;
    }
  }
  opacity: 0.5;
`;
const CartWrapper = styled.div`
  border: 1px solid black;
  background-color: wheat;
  position: absolute;

  z-index: 100;
  display: block;
  margin: 0 0 0 65%;
  animation: slideIn ease 2s;
  @keyframes slideIn {
    0% {
      left: -100px;
    }
    100% {
      left: 0;
    }
  }
`;
const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  & img {
    width: 100px;
  }
  align-items: center;
  /* align-items: center; */
  justify-content: flex-end;
`;
export default Cart;
