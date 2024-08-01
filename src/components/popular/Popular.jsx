import React from "react";
import img1 from "../../assets/product.png";
import img2 from "../../assets/product1.png";
import img3 from "../../assets/product2.png";
import img4 from "../../assets/product3.png";
import "./Popular.css";

const data = [
  {
    id: 1,
    url: img1,
    title: "Spiced Mint",
    price: 9.99,
  },
  {
    id: 2,
    url: img2,
    title: "Sweet Strawberry",
    price: 9.99,
  },
  {
    id: 3,
    url: img3,
    title: "Cool Blueberries",
    price: 9.99,
  },
  {
    id: 4,
    url: img4,
    title: "Juicy Lemon",
    price: 9.99,
  },
];

const Popular = () => {
  return (
    <div className="container">
      <div className="products__title">
        <h2>Popular</h2>
        <p>Order it for you or for your beloved ones </p>
      </div>
      <div className="product__wrapper">
        {data?.map((e) => (
          <div key={e.id} className="product">
            <div className="product__img">
              <img src={e.url} alt={e.title} />
            </div>
            <div className="product__desc">
              <h4>{e.title}</h4>
              <span>{e.price}$</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular;
