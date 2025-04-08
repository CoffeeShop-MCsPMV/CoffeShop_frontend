

import React from 'react';


const AdminOrderCard = ({ order, updateOrderStatus }) => {
    console.log(order)
  return (
    <div className="order-card">
      <h2 className="order-title">Order #{order.order_id}</h2>
      
      {/* Státusz blokk színes háttérrel */}
      <div 
        className={`order-status ${order.order_status}`}
        onClick={() => updateOrderStatus(order.order_id, order.order_status)}
      >
        <p className="font-bold text-sm">{order.order_status}</p>
        <p className="status-text">Click to change status</p>
      </div>

      {order.cups.map(cup => (
        <div key={cup.cup_id} className="cup">
          <h3 className="cup-title">{cup.product_name}</h3>
          <p className="text-sm text-gray-500">Cup ID: {cup.cup_id}</p>
          <ul className="ingredients-list">
            {cup.ingredients.map((ing, idx) => (
              <li key={idx}>
                {ing.name} – {ing.quantity}ml
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default AdminOrderCard;
