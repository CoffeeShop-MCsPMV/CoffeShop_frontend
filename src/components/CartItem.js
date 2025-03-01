import React, { useState } from "react";

function CartItem(props) {
  const [count, setCount] = useState(1);
  const cost=props.item.current_price*count
  function minusCount(num){
    if (num >= 1) {
      setCount(count - 1);
    }
  }
  
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
              <h2 className="text-xl font-semibold">{count}</h2>
              <div className="flex gap-4">
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                  onClick={() => setCount(count + 1)}
                >
                  +
                </button>
                <button
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                  onClick={() => minusCount(count)}
                >
                  -
                </button>
              </div>
            </div>
            <p>{cost}</p>
            <button type="button" class="btn-close" aria-label="Close"></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
