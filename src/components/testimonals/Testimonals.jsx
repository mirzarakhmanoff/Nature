import React from "react";
import img1 from "../../assets/testimonal1.png";
import img2 from "../../assets/testimonal2.png";
import img3 from "../../assets/testimonal3.png";
import { FaRegStar } from "react-icons/fa";
import "./Testimonals.css";

const Testimonals = () => {
  return (
    <div className="container">
      <div className="testimonals">
        <div className="testimonals__title">
          <h2>Testimonials</h2>
          <p>Some quotes from our happy customers</p>
        </div>
        <div className="testimonals__items">
          <div className="testimonal">
            <img src={img1} alt="" />
            <span className="stars">
              <FaRegStar className="star" />
              <FaRegStar className="star" />
              <FaRegStar className="star" />
              <FaRegStar className="star" />
              <FaRegStar className="star" />
            </span>
            <span>“I love it! No more air fresheners”</span>
            <p>Luisa</p>
          </div>
          <div className="testimonal">
            <img src={img2} alt="" />
            <span className="stars">
              <FaRegStar className="star" />
              <FaRegStar className="star" />
              <FaRegStar className="star" />
              <FaRegStar className="star" />
              <FaRegStar className="star" />
            </span>
            <span>“I love it! No more air fresheners”</span>
            <p>Luisa</p>
          </div>{" "}
          <div className="testimonal">
            <img src={img3} alt="" />
            <span className="stars">
              <FaRegStar className="star" />
              <FaRegStar className="star" />
              <FaRegStar className="star" />
              <FaRegStar className="star" />
              <FaRegStar className="star" />
            </span>
            <span>“I love it! No more air fresheners”</span>
            <p>Luisa</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonals;
