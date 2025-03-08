import React, { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { Link } from "react-router-dom";

function ProductCartIcon() {
  const { cartItemPcs} = useContext(CartContext);

  return (
    <button type="button" className="cart-button position-relative" id="cart-btn">
      <Link to="/cart">
      <img src="./images/cart.png" alt="" width="45px" height="45px"/>
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
        {cartItemPcs}
      </span>
      </Link>
    </button>
  );
}

export default ProductCartIcon;
