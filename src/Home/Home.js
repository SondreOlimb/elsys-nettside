import React from "react";

import logo from "../Bilder/bird-logos-png.png";
import dodo from "../Bilder/Dodoradlogo.png";

import "./Home.scss";

//hjem elementet.

function Home() {
  return (
    <div className="Home">
      <div className="H-el">
        <img className="pic" src={dodo} alt="" />
      </div>

      <h1>Enabling renewable energy</h1>
    </div>
  );
}

export default Home;
