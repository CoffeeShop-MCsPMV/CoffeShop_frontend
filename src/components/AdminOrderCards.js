// src/components/AdminOrderCards.js

import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { ApiContext } from '../context/apiContext';

import AdminOrderCard from './AdminOrderCard';

const AdminOrderCards = () => {
  const { getData, updateData } = useContext(ApiContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getData('/api/active-contents', setOrders);
  }, []);

  // Státuszok sorrendje
  const updateOrderStatus = (orderId, currentStatus) => {
    // Csak a jelenlegi státuszt küldjük el a backendnek
    console.log(orderId, currentStatus);
    updateData(`/api/orders/${orderId}/status`, { status: currentStatus });
    getData('/api/active-contents', setOrders);
};


  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {orders.map(order => (
        <AdminOrderCard key={order.order_id} order={order} updateOrderStatus={updateOrderStatus} />
      ))}
    </div>
  );
};

export default AdminOrderCards;
