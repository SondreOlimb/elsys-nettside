import React from "react";
//import logo from "../Bilder//bird-logos-png.png";

import firebase from "../../firebase.js";

import "./Default.scss";
import PieWheel from "../Data/Graph/PieWheel";
import DataViz from "../Data/DataViz";
import Compared from "./Elements/Compared.js";
import MapsNodes from "./Elements/MapsElement/MapsNodes";
import Status from "./Elements/Status/Status";

function Default() {
  const [Node, setNode] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      let intData2;
      const intData3 = [];
      const db = firebase.firestore();
      const data = await db
        .collection("Unit")
        .doc("Nodes")
        .collection("Nodes")
        .get();
      intData2 = data.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      for (var i = 0; i < intData2[0].Node.length; i++) {
        intData3.push(intData2[0].Node[i]);
      }

      console.log(intData3);

      setNode(intData3);
    };
    fetchData();
  }, []);

  let myNodes;
  let myCompared;
  let myMaps;
  let myStatus;

  if (Node.length > 0) {
    myNodes = <PieWheel myData={Node} />;
    myCompared = <Compared myData={Node} />;
    myMaps = <MapsNodes myData={Node} />;
    myStatus = <Status myData={Node} />;
  } else {
    myNodes = <p>Loading...</p>;
    myCompared = <p>Loading...</p>;
    myMaps = <p>Loading...</p>;
    myStatus = <p>Loading...</p>;
  }

  return (
    <div className="Default">
      <div className="element5">{myCompared}</div>
      <div className="element2">{myNodes}</div>
      <div className="element3">{myMaps}</div>
      <div className="element1">{myStatus}</div>
      <div className="element4">Loading...</div>
    </div>
  );
}

export default Default;
