import { useState } from "react";

import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Products from "./components/products/Products";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Hero />
      <Products />
    </>
  );
}

export default App;
