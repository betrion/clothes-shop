import styled from "styled-components";
import Card from "./Card";
const CardGrid = ({ clothes }) => {
  return (
    <GridWrapper>
      {clothes && clothes.map((cloth) => <Card cloth={cloth} />)}
    </GridWrapper>
  );
};

const GridWrapper = styled.div`
  border: 1px solid red;
  display: flex;
  gap: 1rem;
  /* height: 90%; */
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  overflow: auto;
  padding-bottom: 2rem;
`;

export default CardGrid;
