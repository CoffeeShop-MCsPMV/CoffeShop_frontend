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
     
      <div className="Ingredient-card" key={product.product_id}>
        <div>
      <p>{product.name}</p>
      </div>
      <div className="ingredient-photo">
        <button onClick={handlePrev}>ᐊ</button>
        <img
          src={`http://localhost:8000/${product.src}`}
          alt={`${product.name}`}
        />
        <button onClick={handleNext}>ᐅ</button>
      </div>
      </div>
    </>
  );
}

export default IngredientCard;
