import React from "react";
import "./headerWhitOutUser.css";
import HeaderSearch from "./headerSearch";
import ShoppingCart from "./shoppingCart";

const HeaderWhitOutUser = () => {
  return (
    <nav className="navbar">
      <div className="navbarContainer">
        <div className="logoContainer">
          <div className="mobileMenu">
            <i class="fas fa-bars"></i>
          </div>
          <div className="logo">AMAZONAS</div>
          <div className="mobileMenu"></div>
        </div>
        <HeaderSearch />
        <div className="icons">
          <i class="fas fa-user"></i>
          <ShoppingCart />
        </div>
      </div>
    </nav>
  );
};

export default HeaderWhitOutUser;
