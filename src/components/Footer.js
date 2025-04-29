import React from "react";
import "../style/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <a href="/" className="footer-logo">
        <img src="./images/logo.png" width="75px" alt="Logo" />
      </a>
      <div className="footer-links">
        <div className="footer-column">
          <h3>About us</h3>
          <a href="/coming-soon">About us</a>
          <a href="/products">Our coffees</a>
          <a href="/coming-soon">Stories & News</a>
        </div>
        <div className="footer-column">
          <h3>Contact us</h3>
          <a href="/coming-soon">Contact us</a>
        </div>
        <div className="footer-column">
          <h3>Social impact</h3>
          <a href="/coming-soon">Responsibility</a>
        </div>
        <div className="footer-column">
          <h3>Allergens</h3>
          <a href="/coming-soon">Allergens</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
