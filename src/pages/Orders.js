import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import OrderItem from '../components/OrderItem';

function Orders() {
  // const [orderlist, setOrderlist] = useState([]);
  //  useEffect(() => {
  //     getData("/api/order-items", setOrderlist);
  //   }, []);

  return (
    <Accordion>
      <OrderItem />
    </Accordion>
  );
}

export default Orders