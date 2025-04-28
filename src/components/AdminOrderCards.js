import React, { useContext, useEffect, useState } from "react";
import { ApiContext } from "../context/apiContext";

import AdminOrderCard from "./AdminOrderCard";

const AdminOrderCards = () => {
  const { getData, updateData } = useContext(ApiContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getData("/api/active-contents", setOrders);
  }, []);

  const updateOrderStatus = (orderId, currentStatus) => {
    console.log(orderId, currentStatus);
    updateData(`/api/orders/${orderId}/status`, { status: currentStatus });
    getData("/api/active-contents", setOrders);
  };

  return (
    <div className="admin-orders">
      {orders.map((order) => (
        <AdminOrderCard
          key={order.order_id}
          order={order}
          updateOrderStatus={updateOrderStatus}
        />
      ))}
    </div>
  );
};

export default AdminOrderCards;
