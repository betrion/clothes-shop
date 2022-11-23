import styled from "styled-components";

export const CartBg = styled.div`
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
export const CartWrapper = styled.div`
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
export const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  & img {
    width: 100px;
  }
  align-items: center;
  /* align-items: center; */
  justify-content: flex-end;
`;
