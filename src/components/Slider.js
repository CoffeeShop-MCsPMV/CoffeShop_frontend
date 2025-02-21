import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../style/Slider.css";

function Slider() {
  return (
    <Carousel fade>
      <Carousel.Item id="first-slide">
        <p>CO</p>
        <a href="/products">
          <img src="./images/main-coffee2.png" width="275px" alt="" />
        </a>
        <p>EE</p>
      </Carousel.Item>
      <Carousel.Item id="second-slide">
        <Carousel.Caption>
          <h3>THE ROASTED REBEL</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item id="third-slide">
        <div className="introduction">
          <p>Welcome to The Roasted Rebel – Where Coffee Meets Passion </p>
          <p>
            At The Roasted Rebel, we believe that every cup of coffee tells a
            story. Whether you're a seasoned barista or just beginning your
            coffee journey, we’re here to provide you with the finest beans,
            high-quality brewing equipment, and expert guidance to elevate your
            coffee experience. Explore our carefully curated selection of
            specialty coffees, premium accessories, and DIY coffee designed for
            those who love crafting the perfect cup. Join our community of
            coffee lovers and discover the art of brewing—one sip at a time.
          </p>
          <p>☕ Your perfect coffee starts here.</p>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
