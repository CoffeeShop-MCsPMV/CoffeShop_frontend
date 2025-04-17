import React, { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { MixerContext } from "../context/mixerContext";
import "../style/Mixer.css";

function MixerPrice() {
  const { addToCart } = useContext(CartContext);
  const { addedIngredientList, mixerTotal } = useContext(MixerContext);
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
        onClick={() => addToCart(addedIngredientList)}
      >
        Add to cart
      </button>
    </div>
  );
}

export default MixerPrice;
