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

  useEffect(() => {
    getData(`/api/users/${user.id}/orders`, (data) => {
      console.log("user orders:", data);
      setOrderlist(data.orders);
    });
  }, []);

  return (
    <div className="orderList">
      <Accordion>
        <h3>Previous orders</h3>
        {orderlist?.map((item, index) => {
          return <OrderItem item={item} index={index} key={index} />;
        })}
      </Accordion>
    </div>
  );
}

export default Orders;
