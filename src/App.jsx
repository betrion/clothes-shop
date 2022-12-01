// import { motion } from "framer-motion";
import GlobalStyle from "./styles/globalstyle";
import { Navigate, Route, Routes } from "react-router-dom";
import Nav from "./pages/Nav";
import Footer from "./pages/Footer";
import { ThemeProvider } from "styled-components";
import Theme from "./styles/colorscheme";
import React from "react";
import { useState, useEffect } from "react";
import Home from "./Home";
import Cart from "./Cart";
import Contact from "./pages/Contact";
import ROUTES from "./routes/routes.json";
const Products = React.lazy(() => import("./Products"));

const App = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [amountInCart, setAmountInCart] = useState(0);

  useEffect(() => {
    let price = 0;
    selectedProducts.forEach((e) => (price += e.quantity * e.item.price));
    setTotalPrice(price.toFixed(2));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [amountInCart]);

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Nav
        {...{
          selectedProducts,
          setSelectedProducts,
          showCart,
          setShowCart,
          totalPrice,
          amountInCart,
        }}
      />
      {showCart && (
        <Cart
          {...{
            showCart,
            setShowCart,
            selectedProducts,
            setSelectedProducts,
            totalPrice,
            amountInCart,
            setAmountInCart,
          }}
        />
      )}

      <Routes>
        <Route path="/" element={<Navigate to={ROUTES.HOME} />} />
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.CONTACT} element={<Contact />} />
        <Route
          path={ROUTES.PRODUCTS}
          element={
            <React.Suspense fallback={<h2>Loading products...</h2>}>
              <Products
                {...{
                  selectedProducts,
                  setSelectedProducts,
                  amountInCart,
                  setAmountInCart,
                  totalPrice,
                  setTotalPrice,
                }}
              />
            </React.Suspense>
          }
        />
        <Route path="*" element={<h1>Page does not exist..</h1>} />
      </Routes>

      <Footer />
    </ThemeProvider>
  );
};
export default App;
