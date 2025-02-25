import React, { useContext } from "react";
import { ApiContext } from "../context/apiContext";

function ProductCartIcon() {
  const {cartList} = useContext(ApiContext);

  return (
    <button type="button" className="cart-button position-relative">
      <img src="./images/cart.png" alt="" />
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
        {cartList.length}
      </span>
    </button>
  );
}

export default ProductCartIcon;
