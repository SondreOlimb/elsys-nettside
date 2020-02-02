import React from "react";
//import logo from "../Bilder//bird-logos-png.png";
import Weather from "../Weather/Weather";

import "./Default.scss";

function Default() {
  return (
    <div className="Default">
      <Weather className="Weather" />
    </div>
  );
}

export default Default;
