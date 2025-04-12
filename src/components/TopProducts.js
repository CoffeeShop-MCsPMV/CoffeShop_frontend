import React, { useContext } from "react";
import { useState, useEffect } from "react";
import "../style/TopProducts.css";
import { ApiContext } from "../context/apiContext";

const TopProducts = (index) => {
  const { getData } = useContext(ApiContext);
  const [topProducts, setTopProducts] = useState([]);
  const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
    // console.log("Fetching data...");
    getData("/api/top-products", (data) => {
      console.log("Top products:", data);
      setTopProducts(data);
    });
  }, []);

  useEffect(()=>{
    if(isMobile){
      setPlaying(true);
    }
  }, [isMobile])

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

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Inicializáláskor és minden ablakméret-változáskor ellenőrizzük
    window.addEventListener('resize', handleResize);
    handleResize(); // Az inicializáláshoz az ablakméret ellenőrzése

    return () => {
      window.removeEventListener('resize', handleResize); // Cleanup
    };
  }, []);

  return (
    <div className="slider">
      <h3 id="top-title">
        Our top selling products
        <br />
        <a id="drink-link" href="/products">
          Check out all of our drinks ☕
        </a>
      </h3>
      <div className={`slider-container ${isMobile ? 'mobile-slider-container' : ''}`} >
        {carouselData.slice(0, 5).map((item, index) => {
          return (
              <img
                key={index}
                src={`http://localhost:8000/${item.src}`}
                alt={`Slide ${item.product_id}`}
                className={`slider-item slider-item-${index + 1} ${isMobile ? 'mobile-slider' : ''}`} 
              />
          );
        })}
      </div>
      <div className="slider-controls">
        <button className="tpBtn" onClick={previous}>Previous</button>
        <button className="tpBtn" onClick={play}>{playing ? "Pause" : "Play"}</button>
        <button className="tpBtn" onClick={next}>Next</button>
      </div>
    </div>
   
  );
};

export default TopProducts;
