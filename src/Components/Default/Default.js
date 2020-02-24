import React from "react";
//import logo from "../Bilder//bird-logos-png.png";

import firebase from "../../firebase.js";

import "./Default.scss";
import PieWheel from "../Data/Graph/PieWheel";
import DataViz from "../Data/DataViz";
import Compared from "./Elements/Compared.js";

function Default() {
  const [Node, setNode] = React.useState([]);
  React.useEffect(() => {
    const intData2 = [];
    const db = firebase.firestore();
    return db
      .collection("Unit")
      .doc("Nodes")
      .collection("Nodes")
      .onSnapshot(snapsshot => {
        let intData = [];
        snapsshot.forEach(doc => intData.push({ ...doc.data(), id: doc.id }));
        for (var i = 0; i < intData[0].Node.length; i++) {
          intData2.push(intData[0].Node[i]);
        }

        setNode(intData2);
      });
  }, []);

  let myNodes;
  let myCompared;

  if (Node.length > 0) {
    myNodes = <PieWheel myData={Node} />;
    myCompared = <Compared myData={Node} />;
  } else {
    myNodes = <p>Loading...</p>;
    myCompared = <p>Loading...</p>;
  }

  return (
    <div className="Default">
      <div className="element1">{myCompared}</div>
      <div className="element2">Element 2</div>
      <div className="element3">
        <DataViz />
      </div>
      <div className="element4">Element 4</div>
      <div className="element5">{myNodes}</div>
    </div>
  );
}

export default Default;
