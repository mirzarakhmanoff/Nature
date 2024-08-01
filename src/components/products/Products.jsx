import React from "react";
import "./Products.css";
import img1 from "../../assets/product.png";
import img2 from "../../assets/product1.png";
import img3 from "../../assets/product2.png";
import img4 from "../../assets/product3.png";
import img5 from "../../assets/product4.png";
import img6 from "../../assets/product5.png";
import img7 from "../../assets/product6.png";
import img8 from "../../assets/product7.png";

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
    title: "Sweet Straweberry",
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
  {
    id: 5,
    url: img5,
    title: "Product name",
    price: 9.99,
  },
  {
    id: 6,
    url: img6,
    title: "Fragrant Cinnamon",
    price: 9.99,
  },
  {
    id: 7,
    url: img7,
    title: "Summer Cherries",
    price: 9.99,
  },
  {
    id: 8,
    url: img8,
    title: "Clean Lavander",
    price: 9.99,
  },
];

const Products = () => {
  return (
    <div className="container">
      <div className="product__wrapper">
        {data?.map((e) => (
          <div key={e.id} className="product">
            <div className="product__img">
              <img src={e.url} alt="" />
            </div>
            <div className="product__desc">
              <h4>{e.title}</h4>
              <span>{e.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
