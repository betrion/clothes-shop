import Card from "./Card";
import { GridWrapper } from "./styles/GridWrapper";
const CardGrid = ({ items, selectedProducts, setSelectedProducts }) => {
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
          />
        ))}
    </GridWrapper>
  );
};

export default CardGrid;
