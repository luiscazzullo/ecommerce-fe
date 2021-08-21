import React from "react";
import "./shoppingCart.css";
import { useState } from "react";
import { Offcanvas } from "react-bootstrap";

const ShoppingCart = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div onClick={handleShow} className="me-2">
        <i class="fas fa-shopping-cart"></i>
      </div>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};
export default ShoppingCart;
