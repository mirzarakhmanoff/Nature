import React from "react";
import footerLogo from "../../assets/footer.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="container">
      <footer>
        <div className="footer__left">
          <img src={footerLogo} alt="" />
          <p>Your natural candle made for your home and for your wellness.</p>
        </div>
        <div className="footer__right">
          <div className="footer__item">
            <span>Discovery</span>
            <a href="#">New season</a>
            <a href="#">Most searched</a>
            <a href="#">Most selled</a>
          </div>
          <div className="footer__item">
            <span>About</span>
            <a href="#">Help</a>
            <a href="#">Shipping</a>
            <a href="#">Affiliate</a>
          </div>
          <div className="footer__item">
            <span>Info</span>
            <a href="#">Contact us</a>
            <a href="#">Privacy Policies</a>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
