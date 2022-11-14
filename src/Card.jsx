import styled from "styled-components";

const Card = ({ cloth }) => {
  console.log(cloth);
  const titleFormat = (title) => {
    return title.length <= 20 ? title : title.substr(0, 20) + "...";
  };

  return (
    <CardWrapper>
      <div key={cloth.id}>
        <img src={cloth.image} alt={cloth.description} />
        <h4>{titleFormat(cloth.title)}</h4>
        <h5>{cloth.price}$</h5>
        <button>Add to cart</button>
      </div>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  display: flex;
  width: 15vw;
  justify-content: center;
  align-items: center;

  & img {
    width: 120px;
    display: block;
    padding: 1rem;
  }

  & button {
    color: ${({ theme }) => theme.colors.secondary};
    background-color: ${({ theme }) => theme.colors.active};
    border-radius: 5%;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    padding: 5px;
  }
  & button:hover {
    background-color: ${({ theme }) => theme.colors.active.primary};
    color: ${({ theme }) => theme.colors.primary};
  }
  & button:active {
    background-color: ${({ theme }) => theme.colors.active.secondary};
  }
`;
export default Card;
