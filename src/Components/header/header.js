import React from "react";
import { useState, useContext } from "react";
import "./header.css";
import HeaderSearch from "./headerSearch";
import ShoppingCart from "./shoppingCart";
import { Link } from "react-router-dom";
import AuthContext from "../../context/authContext";

const HeaderWhitOutUser = () => {
  const { user } = useContext(AuthContext);

  const [activeMan, setActiveMan] = useState(false);
  const [activeWoman, setActiveWoman] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [activeUser, setActiveUser] = useState(false);

  const changeActiveMan = () => {
    setActiveMan(!activeMan);
    setActiveWoman(false);
    setActiveUser(false);
  };
  const changeActiveWoman = () => {
    setActiveWoman(!activeWoman);
    setActiveMan(false);
    setActiveUser(false);
  };

  const changeMobile = () => {
    setMobile(!mobile);
    setActiveWoman(false);
    setActiveMan(false);
  };

  const changeActiveUser = () => {
    setActiveUser(!activeUser);
    setActiveWoman(false);
    setActiveMan(false);
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
            {user ? (
              <div className="user">
                <img src={user.avatar}></img>
                <i class="fas fa-sort-down" onClick={changeActiveUser}></i>
                {activeUser && (
                  <>
                    <div className="userOptions">
                      <p> {user.name}</p>
                      <p>Editar Perfil</p>
                      <p>Mis Compras</p>
                      {user.admin && (
                        <Link className="link" to="/admin">
                          <p>Administrador</p>
                        </Link>
                      )}
                      <p>Cerrar Sesion</p>
                    </div>
                  </>
                )}
              </div>
            ) : (
              <div className="buttons">
                <Link className="link" to="/login">
                  <p>Iniciar Sesion</p>
                </Link>
                <Link className="link" to="/registro">
                  <p>REGISTRARSE</p>
                </Link>
              </div>
            )}
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
          {user ? (
            <>
              <div onClick={changeActiveUser} className="userMobile">
                <img src={user.avatar}></img>
                {user.name}
                <i class="fas fa-sort-down"></i>
              </div>
              {activeUser && (
                <>
                  <div className="options">
                    <p>Editar Perfil</p>
                    <p>Mis Compras</p>
                    {user.admin && (
                      <Link className="link" to="/admin">
                        <p>Administrador</p>
                      </Link>
                    )}
                    <p>Cerrar Sesion</p>
                  </div>
                </>
              )}
            </>
          ) : (
            <div className="buttonsMobile">
              <Link className="link" to="/login">
                <p className="buttonMobile">Iniciar Sesion</p>
              </Link>
              <Link className="link" to="/registro">
                <p className="buttonMobile">REGISTRARSE</p>
              </Link>
            </div>
          )}
          <p onClick={changeActiveMan}>
            Hombres <i class="fas fa-sort-down"></i>
          </p>
          {activeMan && (
            <div className="options">
              <p>Pantalones</p>
              <p>Remeras</p>
              <p>Abrigos</p>
            </div>
          )}
          <p onClick={changeActiveWoman}>
            Mujeres <i class="fas fa-sort-down"></i>
          </p>
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
