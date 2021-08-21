import React from "react";
import "./headerSearch.css";

const HeaderSearch = () => {
  return (
    <form>
      <input type="text" placeholder="¿Que estas Buscando?" />
      <i class="fas fa-search"></i>
    </form>
  );
};

export default HeaderSearch;
