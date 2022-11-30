import Card from "./Card";
import { GridWrapper } from "./styles/GridWrapper";
const CardGrid = ({
  items,
  selectedProducts,
  setSelectedProducts,
  totalPrice,
  setTotalPrice,
  amountInCart,
  setAmountInCart,
}) => {
  return (
    <GridWrapper>
      {items &&
        items.map((item) => (
          <Card
            item={item}
            items={items}
            key={item.id}
            selectedProducts={selectedProducts}
            setSelectedProducts={setSelectedProducts}
            {...{ totalPrice, setTotalPrice, amountInCart, setAmountInCart }}
          />
        ))}
    </GridWrapper>
  );
};

export default CardGrid;
