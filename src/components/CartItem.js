import React, { useContext, useState } from "react";
import { CartContext } from "../context/cartContext";

function CartItem(props) {
  const {pcsEdit, deleteFromCart} = useContext(CartContext)
  const itemCost = props.item.pcs * props.item.current_price;

  
  return (
    <div className="card mb-3" style={{ maxWidth: "540px" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={`http://localhost:8000/${props.item.src}`}
            className="img-fluid rounded-start"
            alt={props.item.name}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{props.item.name}</h5>
            <div className="flex flex-col items-center gap-4 p-4 border rounded-lg shadow-md w-64">
              <h2 className="text-xl font-semibold">{props.item.pcs}</h2>
              <div className="flex gap-4">
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                  onClick={() => pcsEdit(props.item, props.item.pcs + 1)}
                >
                  +
                </button>
                <button
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                  onClick={() => pcsEdit(props.item, props.item.pcs - 1)}
                >
                  -
                </button>
              </div>
            </div>
            <p>{itemCost}</p>
            <button type="button" class="btn-close" aria-label="Close" onClick={()=>deleteFromCart(props.item)}></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
