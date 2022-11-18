// import { motion } from "framer-motion";
import GlobalStyle from "./styles/globalstyle";
import { Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import { ThemeProvider } from "styled-components";
import Theme from "./styles/theme";
import React from "react";
import { useState } from "react";
import Home from "./Home";
const Products = React.lazy(() => import("./Products"));
function App() {
  const [selectedProducts, setSelectedProducts] = useState([]);
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Nav {...{ selectedProducts, setSelectedProducts }} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<h1>Contact</h1>} />
        <Route
          path="/products"
          element={
            <React.Suspense fallback={<h2>Loading products...</h2>}>
              <Products />
            </React.Suspense>
          }
        />
        <Route path="*" element={<h1>Page does not exist..</h1>} />
      </Routes>

      <Footer />
    </ThemeProvider>
  );
}
export default App;
