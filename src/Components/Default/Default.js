import React from "react";
//import logo from "../Bilder//bird-logos-png.png";

import firebase from "../../firebase.js";

import "./Default.scss";
import PieWheel from "../Data/Graph/PieWheel";
import DataViz from "../Data/DataViz";
import Compared from "./Elements/Compared.js";
import MapsNodes from "./Elements/MapsElement/MapsNodes";
import Status from "./Elements/Status/Status";

// dette er den første sden du kommer inn på når du logger in på my page. dette elementet henter ut navne på alle noedene og snder det videre til de elementene på siden

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
      intData2 = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
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
    //siden det er responstid fra serveren brukes dette for å sjekke om data er motatt
    myNodes = <PieWheel myData={Node} />; // kaller på kakehjul diagramet
    myCompared = <Compared myData={Node} />; //kaller på sammenlignings elementet
    myMaps = <MapsNodes myData={Node} />; // kaller på kartet
    myStatus = <Status myData={Node} />; // kaller på status elementet
  } else {
    // viser loading til data  er motatt
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
    </div>
  );
}

export default Default;
