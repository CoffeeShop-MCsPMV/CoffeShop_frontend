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
          <p>Your perfect coffee starts here.</p>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
