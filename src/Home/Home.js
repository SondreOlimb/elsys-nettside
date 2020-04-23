import React from "react";

import logo from "../Bilder/bird-logos-png.png";
import ntnu from "../Bilder/logo_stor.svg";
//import logo from "../Bilder//bird-logos-png.png";

import "./Home.scss";

//hjem elementet.

function Home() {
  return (
    <div className="Home">
      <div className="H-el">
        <img className="pic" src={logo} alt="" />
      </div>

      <h1>Enabling renewable energy</h1>
    </div>
  );
}

export default Home;
