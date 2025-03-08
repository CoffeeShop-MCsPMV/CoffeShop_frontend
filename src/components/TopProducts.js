import React, { useContext } from "react";
import { useState, useEffect } from "react";
import "../style/TopProducts.css";
import { ApiContext } from "../context/apiContext";

const TopProducts = () => {
  const { getData } = useContext(ApiContext);
  const [list, setList] = useState([]);
  useEffect(() => {
    console.log("data");
    getData("/api/top-products", setList);
  }, []);

  // const initialData = [
  //   { id: '1', src: './images/cappuccino.png' },
  //   { id: '2', src: './images/caramel_macchiato.png' },
  //   { id: '3', src: './images/classic_lemonade.png' },
  //   { id: '4', src: './images/espresso.png' },
  //   { id: '5', src: './images/iced_flat_white.png' },
  // ];

  const [carouselData, setCarouselData] = useState([]);
  //carouselData frissül, ha megjönnek az API adatok
  useEffect(() => {
    if (list.length > 0) {
      setCarouselData(list);
    }
  }, [list]);

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
      const newData = [
        prev[prev.length - 1],
        ...prev.slice(0, prev.length - 1),
      ];
      return newData;
    });
  };

  const next = () => {
    setCarouselData((prev) => {
      const newData = [...prev.slice(1), prev[0]];
      return newData;
    });
  };

  const play = () => {
    setPlaying((prev) => !prev);
  };

  return (
    <div className="slider">
      <div className="slider-container">
        {carouselData.slice(0, 5).map((item, index) => (
          <img
            key={index}
            src={item.src}
            alt={`Slide ${item.id}`}
            className={`slider-item slider-item-${index + 1}`}
          />
        ))}
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
