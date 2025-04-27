import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/cartContext";
import { MixerContext } from "../context/mixerContext";
import "../style/Mixer.css";

function MixerPrice() {
  const { addToCart, isOrdered } = useContext(CartContext);
  const { addedIngredientList, mixerTotal, iceAddToCup, readyTodAdd, setReadyToAdd} = useContext(MixerContext);

 
  const handleClick = () => {
    if (!isOrdered) {
      iceAddToCup()
    }
  };


  useEffect(() => {
    if(readyTodAdd){
      addToCart(addedIngredientList);
    setReadyToAdd(false)}
    
  }, [addedIngredientList, readyTodAdd]);


  if (mixerTotal === 0 || isNaN(mixerTotal)) {
    return (
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }
  
  return (
    <div>
      <h1>{mixerTotal}€</h1>
      <button
        className="addToCartBtn"
        onClick={handleClick}
        disabled={isOrdered}
      >Add to cart</button>
    </div>
  );
}

export default MixerPrice;
