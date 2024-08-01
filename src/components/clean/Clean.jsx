import React from "react";
import { CiCircleCheck } from "react-icons/ci";
import cleanImg from "../../assets/mockups.png";
import "./Clean.css";

const Clean = () => {
  return (
    <div className="container">
      {" "}
      <div className="clean">
        <div className="clean__items">
          <div className="clean__left">
            <h2>Clean and fragrant soy wax</h2>
            <p>Made for your home and for your wellness</p>

            <span>
              <CiCircleCheck /> Eco-sustainable:All recyclable materials, 0% CO2
              emissions
            </span>
            <span>
              <CiCircleCheck /> Hyphoallergenic: 100% natural, human friendly
              ingredients
            </span>
            <span>
              <CiCircleCheck /> Handmade: All candles are craftly made with
              love.
            </span>
            <span>
              <CiCircleCheck /> Long burning: No more waste. Created for last
              long.
            </span>
            <a href="#">Learn More</a>
          </div>
          <div className="clean__right">
            <img src={cleanImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clean;
