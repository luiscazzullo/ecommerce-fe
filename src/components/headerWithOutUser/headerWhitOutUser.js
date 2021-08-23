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
    setActiveMan(false);
    setActiveWoman(false);
    setMobile(false);
  };
  const changeActiveMan = () => {
    setActiveMan(!activeMan);
    setActiveWoman(false);
    setActive(false);
    setMobile(false);
  };
  const changeActiveWoman = () => {
    setActiveWoman(!activeWoman);
    setActiveMan(false);
    setActive(false);
    setMobile(false);
  };

  const changeMobile = () => {
    setMobile(!mobile);
    setActiveWoman(false);
    setActiveMan(false);
    setActive(false);
  };
  return (
    <>
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
          <div className="search">
            <HeaderSearch />
          </div>
          <div className="icons">
            <div className="user">
              <i onClick={changeActive} class="fas fa-user"></i>
              {active && (
                <div className="links">
                  <p>Iniciar Sesion</p>
                  <p>Registrarse</p>
                </div>
              )}
            </div>
            <ShoppingCart />
          </div>
        </div>

        <div className="dropDown">
          <div className="dropDownTitle" onClick={changeActiveMan}>
            Hombres <i class="fas fa-sort-down"></i>
            {activeMan && (
              <>
                <div className="dropDownMenu">
                  <p>Pantalones</p>
                  <p>Remeras</p>
                  <p>Abrigos</p>
                </div>
              </>
            )}
          </div>
          <div className="dropDownTitle" onClick={changeActiveWoman}>
            Mujeres <i class="fas fa-sort-down"></i>
            {activeWoman && (
              <>
                <div className="dropDownMenu">
                  <p>Pantalones</p>
                  <p>Remeras</p>
                  <p>Abrigos</p>
                </div>
              </>
            )}
          </div>
        </div>
      </nav>

      <div className={mobile ? "mobile" : "mobileClose"}>
        <div className="mobileHeader">
          <div className="closeButton">
            <i onClick={changeMobile} class="far fa-times-circle"></i>
          </div>
        </div>
        <div className="mobileContainer">
          <p onClick={changeActiveMan}>Hombres</p>
          {activeMan && (
            <div className="options">
              <p>Pantalones</p>
              <p>Remeras</p>
              <p>Abrigos</p>
            </div>
          )}
          <p onClick={changeActiveWoman}>Mujeres</p>
          {activeWoman && (
            <div className="options">
              <p>Pantalones</p>
              <p>Remeras</p>
              <p>Abrigos</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default HeaderWhitOutUser;
