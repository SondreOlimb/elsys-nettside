import React from "react";
import "./Footer.scss";
import elsys from "../Bilder/elsys.png";
import ntnu from "../Bilder/logo_stor.svg";

function Footer() {
  return (
    <div className="FlexFooter">
      <div className="F-items">
        <img src={ntnu} alt="" className="F-Logo" />
      </div>
      <div className="F-items">
        <img src={elsys} alt="" className="F-Logo" />
      </div>
    </div>
  );
}

export default Footer;
