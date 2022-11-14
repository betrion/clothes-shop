// import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import CardGrid from "./CardGrid";
const Products = () => {
  const [clothes, setClothes] = useState([]);

  const getClothes = async (amount) => {
    const clothesToGet = [];
    const data = await axios
      .get(`https://fakestoreapi.com/products?limit=${amount}`)
      .then((res) => {
        res.data.forEach((element) => {
          const id = element.id;
          const title = element.title;
          const price = element.price;
          const description = element.description;
          const image = element.image;
          clothesToGet.push({ id, title, price, description, image });
        });
      })
      .catch((error) =>
        console.log("ERROR: invalid fetch url, error type: ", error)
      );

    return clothesToGet;
  };
  useEffect(() => {
    const loadClothes = async () => {
      setClothes(await getClothes(20));
    };
    loadClothes();
  }, []);

  return (
    <>
      <CardGrid clothes={clothes} />
    </>
  );
};

export default Products;
