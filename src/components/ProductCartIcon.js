import React, { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { Link } from "react-router-dom";
import { ApiContext } from "../context/apiContext";

function ProductCartIcon() {
  const { cartItemPcs } = useContext(CartContext);
  const { isMobile } = useContext(ApiContext);

  return (
    <div className={`cart-icon${isMobile ? " mobile" : ""}`}>
      <button
        type="button"
        className="cart-button position-relative"
        id="cart-btn"
      >
        <Link to="/cart">
          <p>Cart</p>
          <img src="./images/cart.png" alt="" width="45px" height="45px" />
          <span
            className={`position-absolute badge rounded-pill bg-warning 
  ${isMobile ? "mobile-cart-badge" : "top-0 start-100 translate-middle"}`}
          >
            {cartItemPcs}
          </span>
        </Link>
      </button>
    </div>
  );
}

export default ProductCartIcon;
