import React, { useState } from "react";

function IngredientCard(props) {
    const [index, setIndex] = useState(0);
  if (!props.list || props.list.length === 0) {
    return <p>No products available</p>; // Ha nincs adat, jeleníts meg üzenetet
  }
  
  const product = props.list[index];

  const handlePrev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? props.list.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setIndex((prevIndex) =>
      prevIndex === props.list.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <div key={product.product_id}>
        <button onClick={handlePrev}>prev</button>
        <p>{product.name}</p>
        <img
          src={`http://localhost:8000/${product.src}`}
          alt={`${product.name}`}
        />
        <button onClick={handleNext}>next</button>
      </div>
    </>
  );
}

export default IngredientCard;
