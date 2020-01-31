import React from "react";
import Header from "../Header/Header.js";
//import logo from "../Bilder//bird-logos-png.png";

import "./Home.scss";

function Home() {
  return (
    <div className="Home">
      <div className="H-el">
        <h1>HOME</h1>
        <iframe
          width="320"
          height="280"
          title="sandman"
          src="https://www.youtube.com/embed/tgbNymZ7vqY"
        ></iframe>
      </div>
    </div>
  );
}

export default Home;
