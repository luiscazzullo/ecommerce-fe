import React from "react";
import { useState } from "react";
import "./headerWhitOutUser.css";
import HeaderSearch from "./headerSearch";
import ShoppingCart from "./shoppingCart";
import { Link } from "react-router-dom";

const HeaderWhitOutUser = () => {
  const [active, setActive] = useState(false);
  const [activeMan, setActiveMan] = useState(false);
  const [activeWoman, setActiveWoman] = useState(false);
  const [mobile, setMobile] = useState(false);

  const changeActive = () => {
    setActive(!active);
  };
  const changeActiveMan = () => {
    setActiveMan(!activeMan);
  };
  const changeActiveWoman = () => {
    setActiveWoman(!activeWoman);
  };

  const changeMobile = () => {
    setMobile(!mobile);
  };
  return (
    <nav className="navbar">
      <div className="navbarContainer">
        <div className="logoContainer">
          <div className="mobileMenu">
            <i onClick={changeMobile} class="fas fa-bars"></i>
          </div>
          <div className="logo">AMAZONAS</div>
          <div className="mobileMenu">
            <ShoppingCart />
          </div>
        </div>
        <HeaderSearch />
        <div className="icons">
          <div className="user">
            <i onClick={changeActive} class="fas fa-user"></i>
            {active && (
              <div className="links">
                <Link to={`/login`}>
                  <p>Iniciar Sesion</p>
                </Link>
                <Link to={`/registration`}>
                  <p>Registrarse</p>
                </Link>
              </div>
            )}
          </div>
          <ShoppingCart />
        </div>
      </div>

      <div className={mobile ? "mobile" : "mobileClose"}>
        <div className="mobileHeader">
          <div className="closeButton">
            <i onClick={changeMobile} class="far fa-times-circle"></i>
          </div>
        </div>
        <div className="mobileContainer">
          <p onClick={changeActiveMan}>Hombre</p>
          {activeMan && (
            <div className="options">
              <p>Pantalones</p>
              <p>Remeras</p>
              <p>Abrigos</p>
            </div>
          )}
          <p onClick={changeActiveWoman}>Mujer</p>
          {activeWoman && (
            <div className="options">
              <p>Pantalones</p>
              <p>Remeras</p>
              <p>Abrigos</p>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default HeaderWhitOutUser;
