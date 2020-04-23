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
        <a
          className="BirdLogo"
          href="https://webstockreview.net/image/sample-png-images/2237843.html?fbclid=IwAR3_ezc2F8ttQFWn4SlH8hNcSSEOIJh-ehFaoII1K_v83kUy0tWgZ7oOU3I"
        >
          Logo attribution
        </a>
      </div>
    </div>
  );
}

export default Footer;
