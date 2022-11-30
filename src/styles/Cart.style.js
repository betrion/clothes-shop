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
      left: -100px;
    }
    100% {
      left: 0;
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
  border: 1px solid black;
  background-color: #fff;
  position: absolute;
  /* height: 70vh; */
  z-index: 100;
  display: block;
  margin: 0 0 0 65%;
  animation: ${slideIn} forwards ease 2s;
  filter: brightness(100%);
`;

export const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  overflow: scroll;
  flex-basis: auto;

  & img {
    width: 60px;
  }
`;
