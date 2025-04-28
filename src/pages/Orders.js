import React from "react";
import OrderItem from "../components/OrderItem";
import "../style/Orders.css";

function Orders() {
  return (
    <div className="orderList">
      <OrderItem />;
    </div>
  );
}

export default Orders;
