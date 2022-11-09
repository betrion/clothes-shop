// import { motion } from "framer-motion";
import GlobalStyle from "./styles/globalstyle";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import { ThemeProvider } from "styled-components";
import Theme from "./styles/theme";
function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} />
        <Route path="*" element={<h1>Page does not exist..</h1>} />
      </Routes>

      <Footer />
    </ThemeProvider>
  );
}
export default App;
