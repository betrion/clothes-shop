import axios from "axios";
import { useEffect, useState } from "react";
import CardGrid from "./CardGrid";
const Products = ({
  selectedProducts,
  setSelectedProducts,
  amountInCart,
  setAmountInCart,
  totalPrice,
}) => {
  const [items, setItems] = useState([]);

  const getItems = async (amount) => {
    const itemsToGet = [];
    const data = await axios
      .get(`https://fakestoreapi.com/products?limit=${amount}`)
      .then((res) => {
        res.data.forEach((element) => {
          const id = element.id;
          const title = element.title;
          const price = element.price;
          const description = element.description;
          const image = element.image;
          const quantity = 0;
          itemsToGet.push({ id, title, price, description, image, quantity });
        });
      })
      .catch((error) =>
        console.log("ERROR: invalid fetch url, error type: ", error)
      );

    return itemsToGet;
  };
  useEffect(() => {
    const loadItems = async () => {
      setItems(await getItems(10));
    };
    loadItems();
  }, []);

  return (
    <>
      <CardGrid
        {...{
          items,
          selectedProducts,
          setSelectedProducts,
          setAmountInCart,
          amountInCart,
          totalPrice,
        }}
      />
    </>
  );
};

export default Products;
