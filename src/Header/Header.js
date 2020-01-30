import React from "react";
import logo from "../Bilder/bird-logos-png.png";
import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <ul className="FlexContainer">
      <div className="logo">
        <Link to="/" className="logolink">
          <img className="pic" src={logo} alt="" />
        </Link>
      </div>

      <li className="items-container">
        <Link to="/" className="Nav-item">
          Home
        </Link>

        <Link to="/about" className="Nav-item">
          About
        </Link>
      </li>
    </ul>
  );
}

export default Header;
