import React from "react";
import "./Footer.scss";
import elsys from "../Bilder/elsys.png";
import ntnu from "../Bilder/logo_stor.svg";

//Footer elementet som altid er nederst på skjermen

function Footer() {
  return (
    <div className="FlexFooter">
      <div className="component">
        <div className="F-items">
          <img src={ntnu} alt="" className="F-Logo" />
        </div>
        <div className="F-items">
          <img src={elsys} alt="" className="F-Logo" />
        </div>
      </div>
      <div className="component">
        <p className="design">Developed by: Sondre Olimb and Asta Skirbek</p>
      </div>
    </div>
  );
}

export default Footer;
