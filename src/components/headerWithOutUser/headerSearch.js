import React from "react";
import "./headerSearch.css";

const HeaderSearch = () => {
  return (
    <form>
      <input type="text" placeholder="¿Que estas Buscando?" />
      <i className="fas fa-search"></i>
    </form>
  );
};

export default HeaderSearch;
