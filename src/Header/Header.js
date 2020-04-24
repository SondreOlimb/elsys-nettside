import React from "react";
import logo from "../Bilder/bird-logos-png.png";
import dodo from "../Bilder/Dodoradlogo.png";
import { Link } from "react-router-dom";
import "./Header.scss";

//header ellementet som alltid er øverst på skjermen
//link endrer router i app elementet å som velger mellom de forkjellige elementen home, about og mypage

function Header() {
  return (
    <ul className="FlexContainer">
      <div className="logo">
        <Link to="/" className="logolink">
          <img className="pic" src={dodo} alt="" />
        </Link>
      </div>

      <li className="items-container">
        <Link to="/" className="Nav-item">
          Home
        </Link>

        <Link to="/about" className="Nav-item">
          About
        </Link>

        <Link to="/dashboard" className="log-inn">
          My Page
        </Link>
      </li>
    </ul>
  );
}

export default Header;
