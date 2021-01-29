import React from "react";
import "./header.scss";
import Logo from './robinhood.svg'

const header = () => {
  return (
    <div className="header__wrapper">
      <div className="header__logo">
        <img src={Logo} width={25}/>
      </div>
      <div className="header__search">
      </div>
      <div className="header__menuItems">
        <a href="/">by Kevin Su for Gatsby Labs</a>
      </div>
    </div>
  );
}

export default header;
