import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';

function AddedToast({show, setShow}) {
  

  return (
    <div className='toast-element'>
    <Row>
      <Col xs={6}>
        <Toast onClose={() => setShow(false)} show={show} delay={1000} autohide>
          <Toast.Body>Item added to your cart!</Toast.Body>
        </Toast>
      </Col>
    </Row>
    </div>
  );
}

export default AddedToast;