import React, { useContext, useState } from "react";
import { CartContext } from "../context/cartContext";

function CartItem(props) {
  const { pcsEdit, deleteFromCart } = useContext(CartContext);
  const itemCost = props.item.pcs * props.item.current_price;

  return (
    <div className="cart-item">
      <div className="cart-image">
        <img
          src={`http://localhost:8000/${props.item.src}`}
          className="img-fluid rounded-start"
          alt={props.item.name}
        />
      </div>
      <h5>{props.item.name}</h5>
      <div className="counter">
        <button onClick={() => pcsEdit(props.item, props.item.pcs + 1)}>
          +
        </button>
        <h2 className="text-xl font-semibold">{props.item.pcs}</h2>
        <button onClick={() => pcsEdit(props.item, props.item.pcs - 1)}>
          -
        </button>
      </div>
      <p>{itemCost.toFixed(2)}€</p>
      <button
        type="button"
        className="btn-close"
        aria-label="Close"
        onClick={() => deleteFromCart(props.item)}
      ></button>
    </div>
  );
}

export default CartItem;
