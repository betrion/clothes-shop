import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
    0% {
      /* filter: brightness(100%); */
    }
    100% {
      /* filter: brightness(50%); */
      backdrop-filter: blur(5px)}`;

const slideIn = keyframes` 
    0% {
      left: -95%;
    }
    100% {
      left: 0%;
    }
  `;

const mobileSlideIn = keyframes`
  0%{
    left:-95%;
  }
  100%{
    left:-40%;
  }
`;

export const CartBg = styled.div`
  position: fixed;
  z-index: 111;
  height: 100vh;
  width: 100vw;
  animation: ${fadeIn} forwards ease-in 1s;
  overflow: scroll;

  /* opacity: 0.5; */
  .close-btn {
    position: relative;
    display: inline-block;
    font-size: 3rem;

    right: -96%;
    color: red;
    cursor: pointer;
  }
`;
export const CartWrapper = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  box-shadow: 2px 4px 14px -1px ${({ theme }) => theme.colors.primary};
  border-radius: 15px;
  background-color: #fff;
  position: absolute;
  /* height: 70vh; */
  z-index: 100;
  display: block;
  margin: 0 0 0 65%;
  animation: ${slideIn} forwards ease 2s;
  filter: brightness(100%);
  padding-bottom: 1rem;

  @media (max-width: 750px) {
    animation: ${mobileSlideIn} forwards ease 2s;
  }
`;

export const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* flex-wrap: wrap; */
  align-items: center;
  height: 65vh;
  overflow: scroll;
  flex-basis: auto;
  .product-card {
    display: flex;
    align-items: center;
    padding: 1rem 2rem;
    gap: 2rem;
  }

  .btn-interactive {
    color: green;
    display: inline-block;
    cursor: pointer;
  }
  & img {
    width: 60px;
  }
  text-align: center;
  .price-display {
    position: absolute;
    bottom: 0rem;
    right: 0.2rem;
  }
`;
