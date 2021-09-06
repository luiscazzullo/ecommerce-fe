import React from "react";
import { useState } from "react";
import "./shoppingCart.css";

const ShoppingCart = () => {
  const [click, setClick] = useState(false);

  const change = () => {
    setClick(!click);
  };

  return (
    <>
      <div>
        <i onClick={change} className="fas fa-shopping-cart"></i>
      </div>

      <div className={click ? "shoppingMenu" : "shoppingMenuClose"}>
        <div className="shoppingMenuHeader">
          <div className="title">Carrito de Compras</div>
          <div className="closeButton">
            <i onClick={change} class="far fa-times-circle"></i>
          </div>
        </div>
      </div>
    </>
  );
};
export default ShoppingCart;
