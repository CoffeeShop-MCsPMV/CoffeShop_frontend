import React, { useContext, useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import OrderItem from "../components/OrderItem";
import { ApiContext } from "../context/apiContext";
import useAuthContext from "../context/AuthContext";
import "../style/Orders.css";

function Orders() {
  const [orderlist, setOrderlist] = useState([]);
  const { getData } = useContext(ApiContext);
  const { user } = useAuthContext();


  return (
    <div className="orderList">
      
         <OrderItem />;
      
    </div>
  );
}

export default Orders;
