import styled from "styled-components";
import PropTypes from "prop-types";
const Card = ({ item, selectedProducts, setSelectedProducts }) => {
  console.log(selectedProducts.length);
  const titleFormat = (title) => {
    return title.length <= 20 ? title : title.substr(0, 20) + "...";
  };
  const handleAddToCart = () => {
    setSelectedProducts((prev) => [...prev, item]);
  };

  return (
    <CardWrapper>
      <div key={item.id} id={item.id}>
        <img src={item.image} alt={item.description} />
        <h4>{titleFormat(item.title)}</h4>
        <h5>{item.price}$</h5>
        <button onClick={handleAddToCart}>Add to cart</button>
      </div>
    </CardWrapper>
  );
};
Card.propTypes = {
  item: PropTypes.object,
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
    background-color: ${({ theme }) => theme.colors.hover.secondary};
  }
`;
export default Card;
