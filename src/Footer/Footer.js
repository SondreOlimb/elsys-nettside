import React from "react";
import "./Footer.scss";
import elsys from "../Bilder/elsys.png";
import ntnu from "../Bilder/logo_stor.svg";

function Footer() {
  return (
    <ul className="FlexFooter">
      <li className="F-items">
        <img src={ntnu} alt="" className="F-Logo" />
      </li>
      <li className="F-items">
        <img src={elsys} alt="" className="F-Logo" />
      </li>
    </ul>
  );
}

export default Footer;
