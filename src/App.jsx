// import { motion } from "framer-motion";
import GlobalStyle from "./styles/globalstyle";
import { Route, Routes } from "react-router-dom";
import Nav from "./pages/Nav";
import Footer from "./pages/Footer";
import { ThemeProvider } from "styled-components";
import Theme from "./styles/colorscheme";
import React, { createContext } from "react";
import { useState } from "react";
import Home from "./Home";
import Cart from "./Cart";
import Contact from "./pages/Contact";
import ROUTES from "./routes/routes.json";
const Products = React.lazy(() => import("./Products"));

const App = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Nav {...{ selectedProducts, setSelectedProducts }} />
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.CONTACT} element={<Contact />} />
        <Route
          path="/cart"
          element={<Cart {...{ selectedProducts, setSelectedProducts }} />}
        />
        <Route
          path={ROUTES.PRODUCTS}
          element={
            <React.Suspense fallback={<h2>Loading products...</h2>}>
              <Products {...{ selectedProducts, setSelectedProducts }} />
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
