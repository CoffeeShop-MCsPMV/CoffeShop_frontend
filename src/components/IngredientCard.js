import React, { useContext, useEffect, useState } from "react";
import { MixerContext } from "../context/mixerContext";
import { CartContext } from "../context/cartContext";
import "../style/Mixer.css";

function IngredientCard(props) {
  const { setAddedIngredientList, addedIngredientList, setMixerTotal } = useContext(MixerContext);
  const [index, setIndex] = useState(0);
  const {countTotal}=useContext(CartContext)

  const product = props.list && props.list[index];

  useEffect(() => {
    if (product) {
      addIngredient();
    }
  }, [product]); 

  useEffect(() => {
    countTotal(addedIngredientList, setMixerTotal)
  }, [addedIngredientList]);

  if (!props.list || props.list.length === 0) {
    return <p>Nincs elérhető összetevő.</p>;
  }

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

  function addIngredient() {
    setAddedIngredientList((prev) => {
      const newAddedIngredientList = [...prev];
      newAddedIngredientList[props.id] = product;
      console.log(props.id, product.product_id);
      return newAddedIngredientList;
    });
  }

  return (
    <>
      <div className="Ingredient-card" key={product?.product_id} id={props.id}>
        <div>
          <p>{product?.name}</p>
        </div>
        <div className="ingredient-photo">
          <button className="chooseBtn" onClick={handlePrev}>ᐊ</button>
          <img
            src={`http://localhost:8000/${product?.src}`}
            alt={product?.name}
          />
          <button 
         className="chooseBtn" onClick={handleNext}>ᐅ</button>
        </div>
      </div>
    </>
  );
}

export default IngredientCard;
