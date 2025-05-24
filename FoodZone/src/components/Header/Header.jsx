import React from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
const Header = () => {
  return (
    <div className="header">
      <div className="left-bar">
        <img className="logo" src={logo} />
      </div>
      <div className="right-bar">
        <ul className="nav-items">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
