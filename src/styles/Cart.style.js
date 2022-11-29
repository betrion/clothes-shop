import styled from "styled-components";

export const CartBg = styled.div`
  position: absolute;
  z-index: 111;
  height: 100vh;
  width: 100vw;
  backdrop-filter: blur(0px);
  .close-btn {
    font-size: 3rem;
    margin-left: auto;
    color: red;
    cursor: pointer;
  }
  animation: fadeIn forwards ease-in 1s;
  @keyframes fadeIn {
    0% {
    }
    100% {
      filter: brightness(50%);
      backdrop-filter: blur(5px);
    }
  }
  /* opacity: 0.5; */
`;
export const CartWrapper = styled.div`
  border: 1px solid black;
  background-color: wheat;
  position: absolute;

  z-index: 100;
  display: block;
  margin: 0 0 0 65%;
  animation: slideIn forwards ease 2s;
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
