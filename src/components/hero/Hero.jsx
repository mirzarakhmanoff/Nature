import bgImage from "../../assets/bg-image.png";
import "./Hero.css";

import React from "react";

const Hero = () => {
  return (
    <div className="container">
      <div className="hero">
        <div className="hero__item">
          <h2>
            🌱 <br /> The nature candle
          </h2>
          <p>
            All handmade with natural soy wax, Candleaf is a companion for all
            your pleasure moments
          </p>
          <a href="#">Discovery our collection</a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
