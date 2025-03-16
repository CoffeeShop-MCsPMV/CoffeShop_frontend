import React, { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { MixerContext } from "../context/mixerContext";
import "../style/Mixer.css";

function MixerPrice() {
  const { addToCart } = useContext(CartContext);
  const { addedIngredientList, mixerTotal } = useContext(MixerContext);

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
