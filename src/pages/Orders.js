import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import OrderItem from '../components/OrderItem';

function Orders() {
  return (
    <Accordion>
      <OrderItem />
    </Accordion>
  );
}

export default Orders