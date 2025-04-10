

import React from 'react';


const AdminOrderCard = ({ order, updateOrderStatus }) => {
    console.log(order)
  return (
    <div className={` order-card order-status ${order.order_status}`}
    onClick={() => updateOrderStatus(order.order_id, order.order_status)}>
      <h2 className="order-title">Order #{order.order_id}</h2>

      {order.cups.map(cup => (
        <div key={cup.cup_id} className="cup">
          <h3 className="cup-title">{cup.product_name??'DIY Cup'}</h3>
          <p className="text-sm text-gray-500">Cup ID: {cup.cup_id}</p>
          <ul className="ingredients-list">
            {cup.ingredients.map((ing, idx) => (
              <li key={idx}>
                {ing.name} – {ing.quantity}x
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default AdminOrderCard;
