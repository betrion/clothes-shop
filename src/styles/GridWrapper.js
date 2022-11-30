import styled from "styled-components";

export const GridWrapper = styled.div`
  display: grid;
  gap: 1rem;
  /* height: 90%; */
  /* flex-direction: row; */
  /* justify-content: space-around; */
  /* flex-wrap: wrap; */
  /* overflow: auto; */
  /* padding-bottom: 2rem; */
  grid-template-columns: repeat(4, 1fr);
  padding: 1rem 2rem;
  animation: fadeIn ease 2s;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @media (max-width: 750px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 550px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
