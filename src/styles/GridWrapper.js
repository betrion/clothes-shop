import styled from "styled-components";

export const GridWrapper = styled.div`
  border: 1px solid red;
  display: flex;
  gap: 1rem;
  /* height: 90%; */
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  overflow: auto;
  padding-bottom: 2rem;
  animation: fadeIn ease 2s;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;