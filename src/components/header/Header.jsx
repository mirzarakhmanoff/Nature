import React from "react";
import logo from "../../assets/logo.svg";
import "./Header.css";
import { CgProfile } from "react-icons/cg";
import { SlBasket } from "react-icons/sl";

const Header = () => {
  return (
    <div className="container">
      <div className="navbar">
        <div className="navbar__logo">
          <img src={logo} alt="" />
        </div>
        <div className="nav__items">
          <select name="" id="">
            <option value="">Discovery</option>
            <option value="">National Geographic</option>
            <option value="">Wild Animals</option>
          </select>
          <a href="#">About</a>
          <a href="#">Contact Us</a>
        </div>
        <div className="nav__icons">
          <CgProfile />
          <SlBasket />
        </div>
      </div>
    </div>
  );
};

export default Header;
