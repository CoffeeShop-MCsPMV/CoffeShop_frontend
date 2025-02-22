import React from 'react'
import { useState, useEffect } from 'react';
import "../style/TopProducts.css";

const TopProducts = () => {
  const initialData = [
    { id: '1', src: 'http://fakeimg.pl/300/?text=1' },
    { id: '2', src: 'http://fakeimg.pl/300/?text=2' },
    { id: '3', src: 'http://fakeimg.pl/300/?text=3' },
    { id: '4', src: 'http://fakeimg.pl/300/?text=4' },
    { id: '5', src: 'http://fakeimg.pl/300/?text=5' },
  ];

  const [carouselData, setCarouselData] = useState(initialData);
  const [inView, setInView] = useState([1, 2, 3, 4, 5]);
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
      const newData = [prev[prev.length - 1], ...prev.slice(0, prev.length - 1)];
      return newData;
    });
  };

  const next = () => {
    setCarouselData((prev) => {
      const newData = [...prev.slice(1), prev[0]];
      return newData;
    });
  };

  const add = () => {
    setCarouselData((prev) => {
      const newItem = { id: `${prev.length + 1}`, src: `http://fakeimg.pl/300/?text=${prev.length + 1}` };
      return [...prev, newItem];
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
            key={item.id}
            src={item.src}
            alt={`Slide ${item.id}`}
            className={`slider-item slider-item-${index + 1}`}
          />
        ))}
      </div>
      <div className="slider-controls">
        <button onClick={previous}>Previous</button>
        <button onClick={add}>Add</button>
        <button onClick={play}>{playing ? 'Pause' : 'Play'}</button>
        <button onClick={next}>Next</button>
      </div>
    </div>
  );
};

export default TopProducts