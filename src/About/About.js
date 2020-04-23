import React from "react";
import Konsept from "../Bilder/konsept.png";

import "./About.scss";

function About() {
  return (
    <div className="About">
      <div className="cont">
        <h1 className="h1">About</h1>
        <h3 className="tekst">
          Dodorad is a system for automatic bird detection that was created by a
          group of students at the Norwegian University of Science and
          Technology in the spring of 2020.
        </h3>

        <h3 className="tekst">
          Dodorad uses a radar to detect bird activity in the area surrounding
          the Dodorad-unit. Log in to “My Page” to see the detection data from
          your Dodorad-unit(s)!
        </h3>
      </div>
    </div>
  );
}

export default About;
