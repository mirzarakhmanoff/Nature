import { useState } from "react";

import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Products from "./components/products/Products";
import Clean from "./components/clean/Clean";
import Testimonals from "./components/testimonals/Testimonals";
import Popular from "./components/popular/Popular";
import Footer from "./components/footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Hero />
      <Products />
      <Clean />
      <Testimonals />
      <Popular />
      <Footer />
    </>
  );
}

export default App;
