import React, { useContext } from "react";
import { useState, useEffect } from "react";
import "../style/TopProducts.css";
import { ApiContext } from "../context/apiContext";

const TopProducts = () => {
  const { getData } = useContext(ApiContext);
  const [topProducts, setTopProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    // console.log("Fetching data...");
    getData("/api/top-products", (data) => {
      console.log("Top products:", data);
      setTopProducts(data);
    });
  }, []);

  useEffect(() => {
    console.log("Fetching products...");
    getData("/api/products", (data) => {
      console.log("Fetched products:", data); 
      setAllProducts(data);
    });
  }, []);
  

  const [carouselData, setCarouselData] = useState(topProducts);
  //carouselData frissül, ha megjönnek az API adatok
  useEffect(() => {
    console.log("Updated topProducts:", topProducts);
    if (topProducts.length > 0) {
      setCarouselData(topProducts);
    }
  }, [topProducts]);

  //automatikus lejátszás kezelése
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    let interval;
    if (playing) {
      interval = setInterval(() => {
        next();
      }, 1500);
    }
    return () => clearInterval(interval);
  }, [playing, carouselData]);

  const previous = () => {
    setCarouselData((prev) => {
      if (prev.length === 0) return prev;
      return [prev[prev.length - 1], ...prev.slice(0, prev.length - 1)];
    });
  };
  
  const next = () => {
    setCarouselData((prev) => {
      if (prev.length === 0) return prev;
      return [...prev.slice(1), prev[0]];
    });
  };
  
  const play = () => {
    setPlaying((prev) => !prev);
  };

  return (
    <div className="slider">
      <div className="slider-container">
        {carouselData.slice(0, 5).map((item, index) => {
          const product = allProducts.find(p => p.product_id === item.product_id);
  
          return (
            <img
              key={index}
              src={product?.src}
              alt={`Slide ${item.product_id}`}
              className={`slider-item slider-item-${index + 1}`}
            />
          );
        })}
      </div>
      <div className="slider-controls">
        <button onClick={previous}>Previous</button>
        <button onClick={play}>{playing ? "Pause" : "Play"}</button>
        <button onClick={next}>Next</button>
      </div>
    </div>
  );
  
};

export default TopProducts;
