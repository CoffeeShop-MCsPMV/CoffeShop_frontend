import React, { useContext } from "react";
import { CartContext } from "../context/cartContext";

function ProductCartIcon() {
  const { cartItemPcs} = useContext(CartContext);

  return (
    <button type="button" className="cart-button position-relative">
      <a href="/cart">
      <img src="./images/cart.png" alt="" />
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
        {cartItemPcs}
      </span>
      </a>
    </button>
  );
}

export default ProductCartIcon;
